# Folde Studio launch checklist

No credentials belong in this repository. Store secrets in Vercel Project Settings for Production, Preview, and Development as appropriate.

## 1. GitHub and Vercel

1. Confirm the intended GitHub repository/organisation. The current `origin` points to `akintolaadeyi-gif/Folde-Studio`, not a repository named `teelda`.
2. Push to a feature branch and review the Vercel preview before merging to `main`.
3. Import the repository into Vercel as a Next.js project and select Node.js 22.x.
4. Set every variable listed in `.env.example`. `RESEND_API_KEY` must never use a `NEXT_PUBLIC_` prefix.
5. Keep Vercel's Web Application Firewall and deployment protection enabled for previews. Add rate-limit rules for `/api/contact` (5 requests per 10 minutes per IP) and `/api/subscribe` (10 requests per 10 minutes per IP); the application limiter is an additional best-effort layer.

## 2. Resend

1. Add Resend through the Vercel Marketplace or create a restricted sending key in Resend.
2. Add and verify `folde.work` in Resend. Publish the DKIM and SPF records Resend provides. Add a DMARC record after validating mail flow.
3. Create a Resend Audience for newsletter subscribers and copy its ID to `RESEND_AUDIENCE_ID`.
4. Use `Folde Studio <website@folde.work>` as `RESEND_FROM_EMAIL` and a monitored inbox as `CONTACT_TO_EMAIL`.
5. Test a contact enquiry and newsletter signup from a Vercel preview and production. Confirm delivery, reply-to behaviour, and audience creation.
6. Before sending broadcasts, include Resend's unsubscribe link/header and honour deletions and complaints.

## 3. Domain

1. Add both `folde.work` and `www.folde.work` to the Vercel project.
2. Make `folde.work` the primary domain and redirect `www` to it.
3. Copy the exact DNS records shown by Vercel. Remove conflicting A/AAAA/CNAME records only after confirming they are obsolete.
4. Verify HTTPS, `https://folde.work/robots.txt`, and `https://folde.work/sitemap.xml` after DNS propagation.
5. Add the sitemap in Google Search Console and Bing Webmaster Tools.

## 4. Release gate

Run locally before every production push:

```bash
npm ci
npm run lint
npm run typecheck
npm run build
npm audit --omit=dev
```

After deploy, test the home, work, case-study, contact, press, privacy, and terms routes on desktop and mobile. Check the browser console, response security headers, social link preview, form success/error states, and Vercel function logs.
