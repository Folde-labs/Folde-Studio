import 'server-only'
import { Resend } from 'resend'

let client: Resend | undefined

export function getResend() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) throw new Error('RESEND_API_KEY is not configured')
  client ??= new Resend(apiKey)
  return client
}

export function getEmailConfig() {
  return {
    from: process.env.RESEND_FROM_EMAIL || 'Folde Studio <website@folde.work>',
    contactTo: process.env.CONTACT_TO_EMAIL || 'hello@folde.work',
  }
}
