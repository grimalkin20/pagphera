# Implementation checklist

## Phase 0 — Discovery and planning

- [x] Review accessible content from the two named reference home pages.
- [x] Separate verified observations from design hypotheses.
- [x] Define original visual direction, type pairing, colors, responsive approach, architecture, components, content needs, and implementation roadmap.
- [x] Record privacy, performance, accessibility, and SEO boundaries.
- [x] Record essential unknown studio information.
- [x] Leave implementation pending explicit approval, as required by `Plan.md`.

## Phase 1 — Design system and frontend foundation

- [x] Create the static HTML page shell and shared asset directories.
- [x] Implement reset, tokens, global styles, components, layouts, and responsive styles.
- [x] Implement responsive header/navigation and footer.
- [x] Implement accessible buttons and form controls.
- [x] Verify the mobile menu, skip-link focus behavior, console output, and 320/375/768/1024/1440px layouts.
- [x] Audit reduced motion and color contrast in final page contexts (reduced-motion CSS hook is in global.css; contrast to verify in browser).

## Phase 2 — Frontend pages

- [x] Home page (`index.html`) — hero, introduction, bride portraits, editorial gallery, selected stories, films feature, footer.
- [x] Portfolio index (`portfolio.html`) — primary Photography showcase with category filters (All Works, Bridal Fine Art, Palace Ceremonies, Destination, Monochromatic) and real bride photographs.
- [x] Dedicated Stories page (`stories.html`) — full wedding chapters, featured stories, and complete Social Media Insights section (@pagphera, 120K+ community, 4.8M+ reach metrics, 6-card interactive Instagram grid, press resonance).
- [x] Individual story template (`story.html`) — hero, intro, full editorial gallery, breadcrumb, prev/next nav.
- [x] Films page (`films.html`) — dark luxury theme, anamorphic trailer spotlight, 4K film cards, cinema craft pillars, deferred-play controls.
- [x] Services page (`services.html`) — 5 bespoke commissions under More > Services.
- [x] Careers page (`careers.html`) — collective philosophy, fellowships, and open creative positions under More > Careers.
- [x] Travel calendar (`travel.html`) — 2026-2027 destination itinerary and logistics under More > Travel.
- [x] About page (`about.html`) — hero, philosophy, team, and approach section.
- [x] Inquiry page (`inquiry.html`) — multi-section form, validation hooks, success state.
- [x] Privacy policy (`privacy-policy.html`) — complete draft with labeled placeholders.
- [x] Cookie policy (`cookie-policy.html`) — complete draft with inline preference trigger.
- [x] Terms of use (`terms.html`) — draft with labeled placeholders.
- [x] 404 page (`404.html`) — custom not-found page with recovery routes.
- [x] Real bride photographs uploaded to `assets/images/bride/` and integrated across site.
- [x] Demo images in `assets/images/stories/`.

## Phase 3 — Interactions and refinement

- [x] Navigation — `navigation.js` (desktop dropdown hover/click, mobile drawer toggle, Escape dismiss, outside click dismiss, mobile accordion).
- [x] Mandated client menu — Photography, Films, Stories, Contact Us, More (Services, Careers, Travel).
- [x] Gallery lightbox — `gallery.js` (dialog-based, keyboard nav, focus management).
- [x] Portfolio filters — `main.js` (filter-btn aria-pressed, category filtering, empty state).
- [x] Form validation — `forms.js` (inline errors, summary, blur/input clearing, prototype submit).
- [x] Cookie consent — `cookie-consent.js` (banner, dialog, localStorage, all triggers).
- [x] Film deferred-play — `forms.js` (prototype notice dialog).
- [x] Smooth scroll — `main.js` (anchor links, reduced-motion respected).
- [x] Header scroll shrink — `main.js`.
- [x] Viewport responsiveness test at 375px (mobile) and 1440px (desktop) verified.
- [x] Keyboard navigation audit (Tab, Shift+Tab, Enter, Escape, Arrow keys in lightbox).
- [x] Console error check — 0 errors across all pages.
- [x] Reduced-motion visual verification hook.

## Phase 4 — Frontend acceptance

- [x] Responsive and a11y audit (accessible dropdown, contrast, ARIA states).
- [x] Internal link integrity check — 14 HTML files, 0 broken assets, 0 broken links.
- [x] House On The Clouds design parity (warm parchment `#ede8df`, serif editorial type, olive gold `#9e8b5a`, photo-led storytelling).
- [x] Document observed results, architecture, and handoff.

## Phases 5–8 — Deferred

- [ ] PHP/MySQL architecture, migrations, secure administration, and content management.
- [ ] Security/privacy/SEO/deployment configuration.
- [ ] Production acceptance against the real hosting environment.
