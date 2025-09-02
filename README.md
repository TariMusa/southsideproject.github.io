
# The SouthSide Project — Pilot Site

A minimal, free-to-host static site for your MVP. Built for GitHub Pages (free) and easy to extend.

## What’s inside
- `index.html` — landing page + subscribe block
- `insights.html` — newsletter archive
- `companies.html` — pilot company profiles
- `about.html` — vision, contact, disclaimer
- `posts/issue-0.html` — a pilot newsletter issue
- `companies/*.html` — 5 placeholder profiles
- `assets/style.css`, `assets/script.js` — minimal UI

## How to launch (GitHub Pages, free)
1. Create a GitHub account (if needed).
2. Make a new repo, e.g. `southsideproject.github.io` (exact name makes it a Pages site).
3. Upload all files from this folder to the repo root.
4. In **Settings → Pages**, ensure **Source** is set to `Deploy from a branch` and branch is `main` (or `master`), folder `/root`.
5. Wait ~2 minutes. Your site will be live at `https://YOUR-USERNAME.github.io` (or the repo-name domain).

## Add a custom domain (~$10/year, optional)
- In **Settings → Pages → Custom domain**, add e.g. `southsideproject.com`.
- At your domain registrar, add these DNS records:
  - `A` records to GitHub Pages IPs (see GitHub docs) or a `CNAME` to `YOUR-USERNAME.github.io`.
- Commit a `CNAME` file containing your domain (replace the placeholder in this project if you add one).

## Connect a real newsletter provider
Replace the demo subscribe form on `index.html` with one of the following:
- **Substack**: Settings → “Embed subscribe” → copy the iframe snippet into the `#subscribe` section.
- **Beehiiv**: Settings → Grow → “Embed form” → paste code into `#subscribe`.
- **Mailchimp**: Create an audience → Signup forms → “Embedded” → paste code into `#subscribe`.
- **Buttondown**: Use the hosted form action URL and input names; replace the `action="#"` and field names.

## Editing content
- Update company pages in `/companies/*.html` with real stats and sources.
- Add new issues to `/posts/` and link them in `insights.html` (duplicate the markup for an item).
- Update the About page with your real contact email.

## Notes
- Everything is static HTML/CSS/JS — fast, secure, and free to host.
- Keep it simple; add features only after you’re publishing consistently.
