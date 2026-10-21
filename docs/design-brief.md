# Phase 0 design brief

**Status:** Complete — approval is required before Phase 1 implementation.

## Reference review

### Verified accessible observations

The accessible House On The Clouds home page presents a contact route, a large sequence of photography-led content, featured wedding stories with excerpts and read-more links, a distinct award-winning-film section, and location/contact details in its footer. Its messaging repeatedly frames each wedding as a distinct story.

The accessible WeddingNama home page opens with a concise experiential introduction, states a philosophy of unobtrusive emotional documentation, and makes photography, films, an about route, wedding stories, and Instagram distinct content paths.

### Design hypotheses, not verified facts

The following are creative lessons inferred from the available content rather than a claim about either site’s exact responsive behavior, visual hierarchy, animation, implementation, or conversion performance:

- A small number of purposeful navigation choices helps photography remain central.
- Story-led project cards are stronger than a generic image dump.
- Photography and film need separate discovery paths but should still feel like one studio.
- A calm inquiry path belongs throughout the experience, not only at the end.

No source code, imagery, copy, visual identity, or distinctive layout will be reproduced from either reference.

## Original visual direction: quiet cinema

Pagphera will read as a contemporary editorial journal rather than a vendor catalogue. The experience uses warm, tactile opening moments; cream reading surfaces; occasional near-black galleries; and high-impact, full-bleed photography. Typography is spacious but never theatrical. Movement will be limited to brief opacity/transform transitions and will disappear for visitors who prefer reduced motion.

The home page will prioritize one clear artistic statement, selected complete stories, a clear photography/film split, the studio approach, and a measured invitation to inquire. Cards will use restrained rules and metadata rather than shadows, badges, or repeated rounded containers.

## Design system

### Typography

- **Editorial display:** `Playfair Display`, Georgia, serif
- **Interface and body:** `Inter`, system-ui, sans-serif

This pairing balances expressive, long-form wedding storytelling with highly legible controls and form content. It avoids a third family; display styling is reserved for headings, pull quotes, and occasional project titles. Body copy and all interactive UI remain Inter.

### Foundation tokens

| Token | Value | Intended use |
| --- | --- | --- |
| `--color-peach` | `#FFDAB9` | Introductory panels and restrained accents |
| `--color-peach-soft` | `#FAD0C4` | Transitional bands and subtle emphasis |
| `--color-cream` | `#FFFDF9` | Primary light surface |
| `--color-ink` | `#111111` | Headings, body text, borders |
| `--color-charcoal` | `#222222` | Supporting dark text/surfaces |
| `--color-white` | `#FFFFFF` | High-contrast light UI |
| `--color-night` | `#171513` | Cinematic gallery and film surfaces |
| `--space-1…8` | `0.5rem…8rem` | Eight-step responsive spacing scale |
| `--content-max` | `75rem` | Reading/content measure |
| `--wide-max` | `100rem` | Editorial media framing |
| `--radius-none` | `0` | Default visual language |
| `--duration-fast` | `160ms` | Focus and small interaction feedback |
| `--duration-base` | `300ms` | Nonessential reveal transitions |

Phase 1 will validate color combinations in implemented contexts; the palette is not a blanket authorization to put low-contrast text on peach surfaces.

### Responsive approach

Mobile-first CSS with fluid type via `clamp()`. Planned decision points: 320–375px (compact), 768px (tablet), 1024px (desktop navigation), and 1440px (wide editorial compositions). Layouts use CSS Grid, flexbox, intrinsic media ratios, and bounded content widths. No horizontal scrolling is acceptable at these representative sizes.

## Information architecture

| Page / route | Goal | Primary route onward |
| --- | --- | --- |
| Home (`/`) | Establish the studio point of view and selected work | Stories, films, inquiry |
| Portfolio (`/portfolio`) | Browse approved wedding stories | Individual story |
| Wedding story (`/stories/{slug}`) | Experience a curated project narrative | Adjacent story, inquiry |
| Films (`/films`) | Discover cinematic work without eager video loads | Film play action, inquiry |
| Services (`/services`) | Understand available coverage types | Inquiry |
| About (`/about`) | Understand studio philosophy and team | Inquiry |
| Inquiry (`/inquiry`) | Send a clearly validated availability request | Confirmation state |
| Privacy policy (`/privacy-policy`) | Explain actual data handling | Cookie controls / contact |
| Cookie policy (`/cookie-policy`) | Explain categories and change consent | Cookie controls |
| Terms (`/terms`) | State reviewed terms | Contact |
| Not found (`/404`) | Recover from an invalid route | Home, portfolio |

Legal pages are draft placeholders until actual processing practices, company/contact identity, retention, providers, and applicable jurisdictions are confirmed.

## Reusable component inventory

- Site header, desktop navigation, mobile disclosure navigation, skip link
- Site footer and cookie-settings trigger
- Editorial hero, section heading, text/media split, full-bleed media band
- Primary/text/secondary buttons and arrow links
- Story card, story grid, optional filter bar, metadata row
- Film poster card and deferred-play control
- Responsive image wrapper and art-directed image source pattern
- Accessible gallery/lightbox dialog
- Service row, process step, destination callout, authentic-testimonial block
- Inquiry form fields, validation summary, inline errors, submission status
- Cookie banner, preferences dialog, category controls
- Breadcrumbs, previous/next story navigator, empty/error state

Every listed control needs keyboard behavior, visible focus, and a defined destination or action before it is shown.

## Proposed frontend structure

```text
pagphera/
├── index.html
├── portfolio.html
├── story.html                 # reusable static prototype template
├── films.html
├── services.html
├── about.html
├── inquiry.html
├── privacy-policy.html
├── cookie-policy.html
├── terms.html
├── 404.html
├── assets/
│   ├── css/
│   │   ├── reset.css
│   │   ├── tokens.css
│   │   ├── global.css
│   │   ├── components.css
│   │   ├── layouts.css
│   │   └── responsive.css
│   ├── js/
│   │   ├── main.js
│   │   ├── navigation.js
│   │   ├── gallery.js
│   │   ├── video.js
│   │   ├── forms.js
│   │   └── cookie-consent.js
│   ├── images/
│   │   ├── stories/
│   │   ├── films/
│   │   └── placeholders/
│   ├── videos/
│   └── fonts/
├── data/
│   └── mock-data.js
├── docs/
│   ├── design-brief.md
│   ├── implementation-checklist.md
│   └── testing-checklist.md
├── README.md
└── Plan.md
```

The initial static paths are an integration boundary, not production URLs. PHP routing and clean production slugs will be introduced only after frontend acceptance.

## Content and imagery requirements

Before publishing, obtain authorized assets and permissions for:

- Studio name, logo/wordmark, operating cities, service area, email, phone, social links, and legal entity/contact details.
- One high-priority hero image with a landscape crop; never use it as a lazy-loaded image.
- Six to ten approved story-cover images and three to five images per initial demo story, each with intentional crops, dimensions, and meaningful alternative text.
- Approved couple names/project titles, wedding locations/dates, story copy, and consent to publish each item.
- Film poster images, provider/hosting choice, embed/privacy information, and accessible captions/transcripts where available.
- Confirmed services, team biography, process, destination capability, and only genuine approved testimonials.
- Actual inquiry recipients, data retention policy, processors, analytics choice, cookie categories, and legal review.

Until that material exists, the frontend will use clearly labeled demo content and authorized neutral placeholders only.

## Frontend-first roadmap

| Checkpoint | Deliverable | Exit criteria |
| --- | --- | --- |
| 0 — Discovery | This brief, architecture, decisions, checklist | Approval to build foundation |
| 1 — Foundation | Tokens, reset, global CSS, header/footer, controls, responsive shell | Keyboard navigation and representative viewport checks pass |
| 2 — Core pages | Home, portfolio, story template, films, services, about, inquiry, legal/404 | All internal routes work with mock data; no intentionally dead controls |
| 3 — Interactions | Menu, filters, lightbox, deferred film playback, form validation, cookie preferences | Keyboard/reduced-motion/error-state checks pass |
| 4 — Frontend acceptance | Visual refinement, responsive/a11y/performance/SEO audit and handoff | Findings documented; prototype ready for PHP integration |
| 5 — Backend architecture | PHP structure, migrations, configuration boundary | Deferred until checkpoint 4 approval |

## Key technical decisions and limits

### Performance

- Use explicit image dimensions/aspect ratios, `srcset`/`sizes`, AVIF/WebP plus fallbacks, and lazy loading below the fold.
- Preload or prioritize only the true LCP image after real content is selected; do not autoplay or prefetch large films across the site.
- Defer third-party film embeds until an explicit visitor action and any needed consent.
- Core Web Vitals values are targets, not results; no performance measurement has been run in Phase 0.

### Accessibility

- Use semantic landmarks, one clear H1 per page, persistent field labels, keyboard-operable dialogs, visible `:focus-visible`, and non-color error cues.
- Respect `prefers-reduced-motion`; media controls must remain usable without hover or gesture-only behavior.
- Target WCAG 2.2 AA practices. This is a design target, not a conformance claim.

### Privacy and security

- Persist explicit cookie choices with a version/timestamp; dismissal is not consent.
- Necessary cookies remain separate from analytics/marketing. Optional scripts stay off until valid consent where required.
- The frontend form will validate client-side but will not claim persistence; PHP server validation, CSRF protection, rate limiting, and secure storage are future work.
- Policy drafts require review against real data flows and law in force at launch, including applicable Indian privacy rules.

### SEO

- Use semantic pages, unique titles/descriptions, canonical URLs, meaningful alternative text, crawlable links, and no fabricated structured data.
- Add static prototype `robots.txt` and sitemap only once routes exist; generate production sitemap data from published PHP content later.
- Location-specific copy waits for real operating locations.

## Assumptions and essential questions

Assumptions: the project starts as a static frontend prototype; `Pagphera` is a working project label, not a public studio name; no studio assets or legal copy have been authorized yet.

The only questions that materially affect the first public-page build are:

1. What studio name, operating city/service area, and primary inquiry contact should appear in the prototype?
2. Do you have authorized photographs/film posters to use, or should the first build use labeled neutral placeholders?
3. Which services are confirmed, and does the studio actively offer destination coverage?
4. Should the prototype display a specific social profile, or omit social integration until one is provided?
