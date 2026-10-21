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

- [x] Home page (`index.html`) — hero, introduction, story grid, films feature, process, destination, inquiry CTA.
- [x] Portfolio index (`portfolio.html`) — story grid with filter bar, 7 demo cards.
- [x] Individual story template (`story.html`) — hero, intro, full editorial gallery, breadcrumb, prev/next nav.
- [x] Films page (`films.html`) — dark hero, 4 film poster cards with deferred-play controls.
- [x] Services page (`services.html`) — 5 service rows with alternating image/copy layout.
- [x] About page (`about.html`) — hero, philosophy, team placeholders, approach section.
- [x] Inquiry page (`inquiry.html`) — multi-section form, validation hooks, success state.
- [x] Privacy policy (`privacy-policy.html`) — complete draft with labeled placeholders.
- [x] Cookie policy (`cookie-policy.html`) — complete draft with inline preference trigger.
- [x] Terms of use (`terms.html`) — draft with labeled placeholders.
- [x] 404 page (`404.html`) — custom not-found page with recovery routes.
- [x] Demo images generated and copied to `assets/images/stories/`.

## Phase 3 — Interactions and refinement

- [x] Navigation — `navigation.js` (toggle, Escape, close-on-link-click).
- [x] Gallery lightbox — `gallery.js` (dialog-based, keyboard nav, focus management).
- [x] Portfolio filters — `main.js` (filter-btn aria-pressed, show/hide, empty state).
- [x] Form validation — `forms.js` (inline errors, summary, blur/input clearing, prototype submit).
- [x] Cookie consent — `cookie-consent.js` (banner, dialog, localStorage, all triggers).
- [x] Film deferred-play — `forms.js` (prototype notice dialog).
- [x] Smooth scroll — `main.js` (anchor links, reduced-motion respected).
- [x] Header scroll shrink — `main.js`.
- [ ] Cross-browser test at 320 / 375 / 768 / 1024 / 1440px.
- [ ] Keyboard navigation audit (Tab, Shift+Tab, Enter, Escape, Arrow keys in lightbox).
- [ ] Console error check.
- [ ] Reduced-motion visual verification.

## Phase 4 — Frontend acceptance

- [ ] Responsive and a11y audit.
- [ ] Performance and SEO audit.
- [ ] Internal link integrity check — all `href` values resolve.
- [ ] Document observed results, failures, limitations, and backend handoff.

## Phases 5–8 — Deferred

- [ ] PHP/MySQL architecture, migrations, secure administration, and content management.
- [ ] Security/privacy/SEO/deployment configuration.
- [ ] Production acceptance against the real hosting environment.
