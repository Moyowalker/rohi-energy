# Rohi Energy

Marketing site for Rohi Energy built with Next.js 16, React 19, Tailwind CSS 4, and Motion.

## Local Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Environment Variables

Copy `.env.example` to `.env.local` for local development or add the same variables in Netlify:

```bash
RESEND_API_KEY=
CONTACT_TO_EMAIL=hello@rohienergy.com
CONTACT_FROM_EMAIL=Rohi Energy <noreply@rohienergy.com>
```

Notes:

- If `RESEND_API_KEY` or `CONTACT_TO_EMAIL` is missing, the contact form still returns success, but no email is sent.
- If you want to send from `@rohienergy.com`, verify the domain in Resend first and then set `CONTACT_FROM_EMAIL` to that verified address.

## Deploy To Netlify

This repo already uses the standard Next.js scripts Netlify expects:

- Build command: `npm run build`
- Framework: `Next.js`
- Node version: pinned in `netlify.toml` to `22`

Steps:

1. Push this repository to GitHub.
2. In Netlify, select `Add new site` -> `Import an existing project`.
3. Connect your GitHub account and pick this repository.
4. Netlify should detect `Next.js` automatically.
5. Confirm the build command is `npm run build`.
6. If Netlify asks for a publish directory, leave it empty and let the Next.js integration manage output.
7. In `Site configuration` -> `Environment variables`, add:
	- `RESEND_API_KEY`
	- `CONTACT_TO_EMAIL`
	- `CONTACT_FROM_EMAIL`
8. Trigger the first deploy.

## Connect rohienergy.com

The app metadata already uses `https://rohienergy.com`, so the domain can be connected directly after the first successful deploy.

Recommended setup:

1. In Netlify, open your site and go to `Domain management`.
2. Click `Add a domain` and add:
	- `rohienergy.com`
	- `www.rohienergy.com`
3. Set `rohienergy.com` as the primary domain.
4. Let Netlify create the redirect from `www` to the primary domain, or make `www` primary if that is your preference.

You have two DNS options:

### Option 1: Use Netlify DNS

This is the simplest option.

1. In Netlify domain settings, choose the option to use Netlify DNS.
2. Netlify will show you its nameservers.
3. Log in to the company where you bought `rohienergy.com`.
4. Replace the current nameservers with the Netlify nameservers.
5. Wait for DNS propagation.

### Option 2: Keep DNS At Your Registrar

1. In Netlify domain settings, choose the external DNS option.
2. Netlify will show the exact records it expects for the apex domain and `www`.
3. Add those records at your registrar.
4. Wait for Netlify to verify the domain.

## SSL And Final Checks

After DNS is connected:

1. Wait for Netlify to provision HTTPS.
2. Open both `https://rohienergy.com` and `https://www.rohienergy.com`.
3. Confirm the redirect behavior is correct.
4. Submit the contact form.
5. Confirm the form email arrives in `CONTACT_TO_EMAIL`.

## Useful Notes

- This project uses a Next.js server route at `/api/contact`, so deploy it as a Next.js app, not as a static export.
- Netlify will manage the Next.js runtime. Do not change the app to `output: "export"` unless you intentionally want to remove server features such as the contact API.
