import { getEmailConfig, getResend } from '@/lib/resend'
import {
  cleanText,
  escapeHtml,
  isEmail,
  isRateLimited,
  isSameOrigin,
  privateJson,
  readSmallJson,
} from '@/lib/form-security'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return privateJson({ message: 'Request rejected.' }, { status: 403 })
  }
  if (isRateLimited(request, 'contact', 5, 10 * 60 * 1000)) {
    return privateJson({ message: 'Too many requests. Please try again later.' }, { status: 429 })
  }

  try {
    const body = await readSmallJson(request)
    if (!body || typeof body !== 'object') {
      return privateJson({ message: 'Please check the form and try again.' }, { status: 400 })
    }

    const values = body as Record<string, unknown>
    const website = cleanText(values.website, 200)
    if (website) return privateJson({ ok: true })

    const firstName = cleanText(values.firstName, 80).replace(/[\r\n]+/g, ' ')
    const lastName = cleanText(values.lastName, 80).replace(/[\r\n]+/g, ' ')
    const email = cleanText(values.email, 254).toLowerCase()
    const phone = cleanText(values.phone, 50).replace(/[\r\n]+/g, ' ')
    const project = cleanText(values.project, 4_000)

    if (!firstName || !lastName || !isEmail(email) || project.length < 20) {
      return privateJson({ message: 'Please complete all required fields.' }, { status: 400 })
    }

    const name = `${firstName} ${lastName}`
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safePhone = escapeHtml(phone || 'Not provided')
    const safeProject = escapeHtml(project).replace(/\n/g, '<br />')
    const { from, contactTo } = getEmailConfig()
    const resend = getResend()

    const { error } = await resend.batch.send([
      {
        from,
        to: contactTo,
        replyTo: email,
        subject: `New project enquiry from ${name}`,
        html: `<h1>New project enquiry</h1><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Phone:</strong> ${safePhone}</p><h2>Project details</h2><p>${safeProject}</p>`,
        text: `New project enquiry\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nProject details:\n${project}`,
      },
      {
        from,
        to: email,
        replyTo: contactTo,
        subject: 'We received your Folde Studio enquiry',
        html: `<p>Hi ${escapeHtml(firstName)},</p><p>Thank you for reaching out to Folde Studio. We have received your project enquiry and will get back to you as soon as possible.</p><p>In the meantime, you can explore our <a href="https://folde.work/work">selected work</a>.</p><p>Folde Studio</p>`,
        text: `Hi ${firstName},\n\nThank you for reaching out to Folde Studio. We have received your project enquiry and will get back to you as soon as possible.\n\nFolde Studio`,
      },
    ])

    if (error) throw new Error(error.message)
    return privateJson({ ok: true })
  } catch (error) {
    const code = error instanceof Error ? error.message : ''
    if (code === 'PAYLOAD_TOO_LARGE') {
      return privateJson({ message: 'The message is too large.' }, { status: 413 })
    }
    if (code === 'INVALID_JSON') {
      return privateJson({ message: 'Invalid request.' }, { status: 400 })
    }
    console.error('Contact form delivery failed')
    return privateJson({ message: 'We could not send your enquiry. Please email hello@folde.work.' }, { status: 500 })
  }
}
