# Folde Studio

Production website for [folde.work](https://folde.work), built with Next.js App Router.

## Local development

Use Node.js 22 and install from the lockfile:

```bash
npm ci
cp .env.example .env.local
npm run dev
```

The site renders without email credentials, but contact and newsletter delivery require the server-only Resend variables documented in `.env.example`.

## Release checks

```bash
npm run check
npm audit --omit=dev
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for the GitHub, Vercel, Resend, DNS, and post-launch checklist.
