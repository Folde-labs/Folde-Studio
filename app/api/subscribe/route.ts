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
  if (isRateLimited(request, 'subscribe', 10, 10 * 60 * 1000)) {
    return privateJson({ message: 'Too many requests. Please try again later.' }, { status: 429 })
  }

  try {
    const body = await readSmallJson(request, 4_000)
    if (!body || typeof body !== 'object') {
      return privateJson({ message: 'Enter a valid email address.' }, { status: 400 })
    }

    const values = body as Record<string, unknown>
    if (cleanText(values.website, 200)) return privateJson({ ok: true })

    const email = cleanText(values.email, 254).toLowerCase()
    if (!isEmail(email)) {
      return privateJson({ message: 'Enter a valid email address.' }, { status: 400 })
    }

    const audienceId = process.env.RESEND_AUDIENCE_ID
    if (!audienceId) throw new Error('RESEND_AUDIENCE_ID is not configured')

    const resend = getResend()
    const { error: contactError } = await resend.contacts.create({
      audienceId,
      email,
      unsubscribed: false,
    })

    if (contactError) {
      const isExisting = contactError.message.toLowerCase().includes('already')
      if (isExisting) return privateJson({ ok: true })
      throw new Error(contactError.message)
    }

    const { from, contactTo } = getEmailConfig()
    const { error: sendError } = await resend.emails.send({
      from,
      to: email,
      replyTo: contactTo,
      subject: 'Welcome to the Folde Studio list',
      html: `<p>Thanks for subscribing to Folde Studio.</p><p>We share design insights, studio news, and industry trends about twice a month.</p><p>If you did not subscribe, reply to this email and we will remove <strong>${escapeHtml(email)}</strong> immediately.</p><p>Folde Studio</p>`,
      text: 'Thanks for subscribing to Folde Studio. We share design insights, studio news, and industry trends about twice a month. If you did not subscribe, reply to this email and we will remove you immediately.',
    })

    if (sendError) throw new Error(sendError.message)
    return privateJson({ ok: true })
  } catch (error) {
    const code = error instanceof Error ? error.message : ''
    if (code === 'PAYLOAD_TOO_LARGE') {
      return privateJson({ message: 'Invalid request.' }, { status: 413 })
    }
    if (code === 'INVALID_JSON') {
      return privateJson({ message: 'Invalid request.' }, { status: 400 })
    }
    console.error('Newsletter subscription failed')
    return privateJson({ message: 'Subscription failed. Please try again.' }, { status: 500 })
  }
}
