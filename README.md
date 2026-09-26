# Prof. Osita Ogbu, OON, FNAE: Official Portfolio

A single-page professional portfolio for Prof. Osita Ogbu, development economist, former Minister of National Planning and Chief Economic Adviser to the President of Nigeria, author, and Managing Director/CEO of African Development Solutions International.

Built as a birthday gift. Birth date: 29 September 1957.

Developer: Ikedinachi Ogbonne

## Stack

- React 18 with Vite
- Tailwind CSS v3 (pinned; v4 is not compatible with this config)
- Framer Motion
- lucide-react
- Deployed on Vercel

## Getting started

Requires Node.js 18 or later.

```bash
npm install
npm run dev        # local development server
npm run build      # production build to dist/
npm run preview    # serve the production build locally
```

Helper scripts live in `scripts/`:

```bash
node scripts/check-links.mjs   # requests every publication link and reports its status
node scripts/make-icons.mjs    # generates favicon and share icons from the logo
```

## Project structure

```
prof-ogbu-portfolio/
├── public/
│   ├── logo/                 logo files (dark and light variants)
│   ├── images/               photographs (WebP with original fallbacks)
│   │   └── book-covers/      publication covers, only if supplied with permission
│   ├── favicon.svg / .ico, apple-touch-icon.png, icon-192.png, icon-512.png
│   ├── og-image.png          1200x630 share preview
│   ├── site.webmanifest
│   ├── robots.txt
│   └── sitemap.xml
├── scripts/
├── docs/
│   └── bio.md                  standalone biography for press and reference use
├── src/
│   ├── components/           Navigation, Hero, About, Timeline, Publications,
│   │                         Speaking, Roles, Honours, Quotes, Contact, Footer
│   ├── hooks/useScrollAnimation.js
│   ├── utils/constants.js    single source of truth for all content
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html                title, meta, Open Graph and JSON-LD live here
├── SPEC.md                   project specification (v1.1)
├── tailwind.config.js
└── README.md
```

## Editing content

All text, dates, links, and image references are in `src/utils/constants.js`. Components read from it and contain no hardcoded content. To correct a fact, change it there.

Rules for content:

- Never add a fact, quote, URL, caption, or credit that has no source.
- If a value is unknown, set it to `null`. Components hide elements whose value is `null`.
- Publications in `publications.needsVerification` are not rendered. Move an item to `publications.verified` only after confirming it against his official bio.
- Quotes render only when `verified: true`. Quote text must be exact, never paraphrased.
- Display name everywhere: "Prof. Osita Ogbu, OON, FNAE". The full name "Osita Michael Ogbu" appears only in About. Do not show his age.

`index.html` holds a second copy of some facts (meta description and JSON-LD). Update both when a fact changes.

## Design rules

- Formal and restrained, in the style of a university press. No glassmorphism, blur, glow, or decorative effects.
- Colours: navy `#0B1630`, blue `#1A3156`, light blue `#2C5F8D`, gold `#D4AF37`, light gold `#E0C07A`, dark gold `#7A5F12`, cream `#F3E9DA`, off-white `#F7F4EE`, charcoal `#2D2D2D`, gray `#5A5A5A`.
- Gold `#D4AF37` is never used for text on light backgrounds. Use navy, or `#7A5F12` where gold text is needed.
- Fonts: Playfair Display for headings, Inter for body text.
- One shared fade-in animation, once per section. All motion respects `prefers-reduced-motion`.
- WCAG AA contrast, semantic HTML, keyboard navigation, visible focus states.

## Images

- Use only photographs supplied by his family, ADSI, or another party with permission. Do not scrape photos or book covers.
- Photo alt text is in the `images` export in `constants.js`. Add `caption` and `credit` only when known.
- Publications without a cover render a typographic cover.

## SEO

- Static title, description, canonical URL, Open Graph, and Twitter tags in `index.html`.
- Person JSON-LD in `index.html`, limited to facts from `SPEC.md`.
- `robots.txt` and `sitemap.xml` in `public/`.
- Replace every `YOUR-DOMAIN` placeholder with the live domain before launch.
- The page carries `<meta name="robots" content="noindex, nofollow">` until launch day so it stays out of search results before the reveal.

## Deployment (Vercel)

1. Push the repository to GitHub.
2. Import it in Vercel. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
3. Add the custom domain (recommended, registered so he owns it).

## Open items before launch

These are unresolved and must be settled before the site goes public.

- [x] Birthplace: Onitsha, Anambra State, confirmed with family. Wikipedia previously listed Nsukka.
- [x] Adviser appointment during the Goodluck Jonathan administration: none. His only presidential adviser role was under President Olusegun Obasanjo, November 2005 to November 2006.
- [x] Verified quotes: two verbatim lines confirmed against Vanguard, 11 May 2025, "Enugu North stakeholders describe Mbah as a proactive, responsive leader", and one against Blueprint, 23 August 2025, "Nigerian varsities churning out students, not solutions – Ex-minister Ogbu".
- [ ] Three unverified quotes: find sources or leave them hidden. The NESG fireside chat of 24 April 2025 is the likely source of some of them, but the published page is not machine-readable, so the wording could not be confirmed.
- [ ] Four publications in `needsVerification` (may belong to a different author with a similar name).
- [ ] Publication details (year, publisher, role, co-authors) checked against each book's catalogue page.
- [ ] Publication links: run `scripts/check-links.mjs` and confirm each page shows the right book.
- [ ] Photo captions and credits.
- [ ] Contact details (email, LinkedIn, university profile): add only if public and approved.

## Launch checklist

1. Proofread every line on the site against `constants.js` and its sources.
2. Run `npm run build` and fix all errors and warnings.
3. Check Lighthouse (Performance and Accessibility above 90) and test at 360px, 768px, and 1280px on a real phone.
4. Replace `YOUR-DOMAIN` everywhere.
5. Remove the `noindex, nofollow` meta tag from `index.html` and redeploy.
6. Add the site to Google Search Console, verify it, and submit `sitemap.xml`.
7. Paste the link into WhatsApp to check the preview card.
8. Generate the QR code for the birthday card.

## Notes

- `SPEC.md` is the project specification. Section 20 (Final Notes) is developer commentary and is not site copy.
- Publication covers and links are added per book in `constants.js`. Links go to catalogue or publisher pages, never to guessed URLs.