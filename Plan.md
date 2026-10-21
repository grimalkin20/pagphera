
# MASTER PROMPT: Premium Wedding Photography & Cinematography Studio Website

## 1. ROLE AND OBJECTIVE

Act as a senior UI/UX designer, luxury brand strategist, creative director, frontend engineer, PHP backend developer, SQL database architect, application security engineer, SEO specialist, and accessibility consultant.

Your task is to help me design, develop, test, and eventually deploy a **premium, minimalist, cinematic wedding photography and cinematography studio website**.

This website is being developed for a friend's professional photography studio. The business provides:

- Wedding photography and cinematography
- Pre-wedding photography and films
- Destination wedding photography and films
- Wedding highlight films and cinematic storytelling
- Couple portraits and engagement shoots
- Wedding albums and curated visual collections

The website must attract potential clients, communicate artistic credibility, showcase the studio's portfolio, and convert visitors into genuine inquiries.

Do not build a generic photography website, a typical wedding vendor template, or an overdecorated luxury website. Create a distinctive, elegant, editorial experience that allows the photographs and films to be the primary focus.

### Primary objectives

1. Establish a memorable and premium visual identity.
2. Present wedding stories through cinematic, editorial-quality layouts.
3. Build a fast, responsive, accessible, and SEO-friendly frontend.
4. Develop a secure custom PHP and SQL backend in a later phase.
5. Allow authorized administrators to manage images, videos, projects, testimonials, and inquiries without editing code.
6. Implement privacy-conscious cookie consent and website traffic analytics.
7. Establish a maintainable project architecture that can be expanded over time.

Treat this as a real production project. Distinguish between prototype functionality and production functionality, and never claim that a feature is secure, tested, or operational without verification.

---

## 2. DESIGN REFERENCES AND CREATIVE DIRECTION

Study the following reference websites before developing the design.

**Reference A: House On The Clouds**
https://www.houseontheclouds.com/

**Reference B: WeddingNama**
https://www.weddingnama.in/

Inspect the accessible pages, visual hierarchy, navigation, portfolio presentation, typography, image treatment, spacing, mobile layouts, and inquiry journey.

If browser access is available, examine the live websites directly. If a page or feature cannot be accessed, state that limitation and continue using the supplied creative direction rather than inventing observations.

### What to take from the references

From House On The Clouds, explore the potential for:

- Cinematic wedding storytelling.
- Immersive, photography-led page composition.
- Editorial presentation of individual wedding stories.
- Strong emotional impact through imagery.
- A sophisticated, recognizable studio identity.

From WeddingNama, explore the potential for:

- Premium wedding portfolio presentation.
- Authentic, emotion-driven photography.
- Distinct photography and cinematography showcases.
- A clear journey from discovery to inquiry.
- Consistent branding and presentation of wedding stories.

These are creative directions to investigate, not requirements to reproduce exact implementations.

### Originality requirements

Do not copy either reference site's:

- Source code or proprietary assets.
- Logo, brand identity, or distinctive branded elements.
- Exact page layouts, copywriting, or proprietary design components.
- Photography or videos without authorization.

Create an original design that applies the relevant high-level principles to the studio's own identity.

---

## 3. BRAND IDENTITY AND VISUAL SYSTEM

The studio's identity should communicate:

- Artistic excellence.
- Emotional authenticity.
- Cinematic storytelling.
- Refined minimalism.
- Trust and professionalism.
- Premium service without excessive visual decoration.

The design should feel like an independent editorial photography publication rather than a conventional business website.

### 3.1 Color palette

Use the following palette as the starting point.

| Purpose                         | Color       | Hex code |
| ------------------------------- | ----------- | -------- |
| Primary warm background         | Peach Puff  | #FFDAB9  |
| Alternative soft peach          | Dusty peach | #FAD0C4  |
| Cards and secondary backgrounds | Warm cream  | #FFFDF9  |
| Primary typography              | Deep black  | #111111  |
| Secondary typography            | Charcoal    | #222222  |
| White UI accents                | Pure white  | #FFFFFF  |

### Color implementation rules

- Use warm peach selectively for introductory sections, selected backgrounds, subtle transitions, and brand accents.
- Use cream and neutral tones to preserve a refined editorial atmosphere.
- Use deep black for primary typography, navigation, and structural elements.
- Use white for cards, contrast, badges, and selected overlays where appropriate.
- Introduce photography-specific dark backgrounds where they improve cinematic presentation.
- Do not apply the peach background to every section. Maintain visual variation.
- Ensure all text, controls, and overlays satisfy WCAG AA contrast requirements wherever applicable.
- Treat the palette as a design system, not a rigid rule. Adjust individual surface colors when necessary for readability and accessibility.

### 3.2 Typography

Evaluate these font families and select a cohesive pairing.

**Display and editorial headlines**

- Playfair Display
- Syne

**Subheadings and interface typography**

- Work Sans
- Inter

**Body text and supporting content**

- Plus Jakarta Sans
- DM Sans

Recommended starting combination:

- Playfair Display for expressive editorial headings.
- Inter for navigation, buttons, forms, labels, and interface elements.
- DM Sans for readable body copy.

You may recommend a better pairing if it improves the brand's character.

Typography requirements:

- Use a consistent type scale.
- Use strong, intentional headline hierarchy.
- Keep body text comfortable to read.
- Avoid excessive uppercase text, unnecessary letter spacing, and oversized headings on small screens.
- Use responsive typography with CSS `clamp()`.
- Load fonts efficiently, preferably using locally hosted licensed font files or a privacy-conscious font delivery strategy.
- Provide suitable fallback fonts.

### 3.3 Layout principles

Implement:

- Generous whitespace.
- Asymmetric editorial compositions where appropriate.
- Large photography with intentional cropping.
- Full-bleed imagery for selected storytelling moments.
- Restrained borders and subtle separators.
- Consistent spacing tokens.
- A deliberate mix of light, dark, peach, and cream sections.
- Carefully designed transitions between text and imagery.
- Subtle animations that do not interfere with browsing.

Avoid:

- Excessive glassmorphism.
- Generic gradient backgrounds.
- Unnecessary shadows and rounded cards everywhere.
- Too many decorative icons.
- Repetitive three-column layouts throughout the entire site.
- Excessive animation, parallax, or scroll-jacking.
- Stock-template aesthetics.

The visual content should do most of the work.

---

## 4. TARGET AUDIENCE AND CONVERSION STRATEGY

Design primarily for couples who are researching wedding photographers, cinematographers, and destination wedding specialists.

Visitors may be:

- Planning a traditional or contemporary wedding.
- Looking for premium photography and films.
- Comparing different photography studios.
- Organizing a destination wedding.
- Searching for a studio whose visual style matches their story.

The website should answer these questions quickly:

1. What kind of weddings does this studio photograph?
2. What makes its visual style distinctive?
3. Can I see complete wedding stories rather than isolated photographs?
4. Does it offer photography, cinematography, or both?
5. Can it cover my location and wedding dates?
6. How do I inquire about availability and pricing?

Use contextual calls to action such as:

- Explore Our Stories
- View Wedding Films
- Plan Your Wedding Coverage
- Check Availability
- Tell Us Your Story

Avoid aggressive pop-ups, fake scarcity, fabricated testimonials, and manipulative conversion tactics.

Do not invent the studio's name, location, awards, client count, years of experience, prices, or credentials. Use clearly identifiable placeholders until real information is supplied.

---

## 5. WEBSITE INFORMATION ARCHITECTURE

Design a complete, logically organized website with the following pages.

### 5.1 Home page

Create an impactful opening experience.

Required sections:

1. Minimal header and navigation.
2. Hero section featuring a striking authorized wedding photograph or cinematic film.
3. A memorable headline and concise studio introduction.
4. Primary call to action.
5. Selected wedding stories.
6. Photography and cinematography showcase.
7. Studio philosophy and approach to storytelling.
8. Selected testimonials, only when genuine content is available.
9. A brief process or experience section.
10. Destination wedding capabilities, if applicable.
11. Instagram or other social portfolio integration, if justified.
12. Inquiry call to action.
13. Minimal footer with navigation, contact details, social links, and legal pages.

The hero should feel cinematic and sophisticated, but it must not compromise page speed or accessibility.

Consider a high-quality static hero image with an optional muted, compressed background film. Respect reduced-motion preferences and provide a useful fallback.

### 5.2 Portfolio page

Build a visually rich portfolio with:

- Editorial image grids and carefully composed image sequences.
- Wedding story thumbnails.
- Couple names or approved project titles.
- Wedding locations, when publicly approved.
- Wedding dates or descriptive labels when useful.
- Optional categories and filtering.
- Dedicated links to individual projects.

The portfolio must be designed for both visual discovery and efficient browsing.

Do not force every photograph into identical aspect ratios. Establish a deliberate image system with appropriate cropping.

### 5.3 Individual wedding story page

Each project should support:

- Project title.
- Couple or approved client names.
- Wedding location and event date, when authorized.
- Introductory story or editorial description.
- Curated image gallery.
- Optional embedded wedding film.
- A logical sequence of photographs.
- Optional event details, such as ceremony, reception, or pre-wedding.
- Navigation to previous and next projects.
- A relevant inquiry call to action.

Build a reusable project-page template so the administrator can publish new stories without writing new HTML.

### 5.4 Cinematography page

Create a film-focused experience featuring:

- A strong visual introduction.
- Selected wedding films.
- Poster thumbnails and play controls.
- Optional film descriptions and project metadata.
- Appropriate video-provider embeds or optimized hosted media.
- A clear route to inquire about film coverage.

Do not automatically download large videos on page load.

### 5.5 Services page

Present the studio's actual services, such as:

- Wedding photography.
- Wedding cinematography.
- Pre-wedding photography and films.
- Destination wedding coverage.
- Wedding highlight films.
- Custom coverage combinations.

Allow the studio to update these offerings later.

Do not invent prices or promise services that have not been confirmed.

### 5.6 About page

Present:

- The studio's philosophy.
- Its creative approach.
- The people behind the studio, when information is provided.
- The way the team approaches wedding storytelling.
- Relevant, verifiable credentials.
- A clear inquiry route.

Keep the copy authentic, concise, and personal.

### 5.7 Inquiry page

Create a dedicated inquiry experience with:

- A warm introduction.
- A carefully designed form.
- Alternative contact methods, when provided.
- Privacy information.
- A clear submission state.
- A useful confirmation message after successful submission.

The inquiry form must not falsely indicate success if the submission fails.

### 5.8 Supporting pages

Provide:

- Privacy Policy.
- Cookie Policy.
- Terms of Use.
- Custom 404 page.
- Accessible form success and error states.
- A custom thank-you page if useful.

Generate legal-policy drafts that clearly identify assumptions and require review against the actual business practices and applicable law.

---

## 6. FRONTEND TECHNOLOGY AND IMPLEMENTATION

### Required technology stack

Use:

- HTML5 for semantic structure.
- CSS3 for styling and responsive layouts.
- Vanilla JavaScript for interactions.
- PHP for the future server-side application.
- MySQL or MariaDB for relational data storage.

Do not introduce React, Vue, Angular, Next.js, Tailwind CSS, Bootstrap, or another frontend framework unless I explicitly approve the change.

Do not use a frontend framework merely to solve problems that can be handled with well-structured HTML, CSS, and JavaScript.

A lightweight icon library or small, carefully selected utility is acceptable if it provides a clear benefit.

### 6.1 Frontend-first development

Initially develop the frontend using realistic mock data.

The frontend should:

- Work without a backend.
- Support local development.
- Demonstrate the complete intended design.
- Use reusable page structures and components.
- Include meaningful interactions.
- Be ready for later integration with PHP endpoints.

Use mock data for projects, testimonials, services, and navigation where actual content is unavailable.

Clearly label demo content and never present fictional client testimonials as genuine.

Do not simulate successful database persistence or real analytics.

### 6.2 Suggested frontend structure

Start with a maintainable structure similar to:

```text
studio-website/
├── index.html
├── portfolio.html
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
│   │   ├── cookie-consent.js
│   │   └── analytics-consent.js
│   ├── images/
│   ├── videos/
│   └── fonts/
├── data/
│   └── mock-data.js
├── docs/
│   ├── design-system.md
│   ├── development-plan.md
│   └── testing-checklist.md
└── README.md
```

This is a starting structure, not an inflexible requirement. Adjust it when there is a clear architectural reason.

Keep content, presentation, and interaction logic separated wherever practical.

### 6.3 Frontend functionality

Implement and test:

- Responsive navigation.
- Mobile navigation drawer or menu.
- Portfolio category filters, if included.
- Image galleries and accessible lightboxes.
- Film poster and playback interactions.
- Previous/next project navigation.
- Inquiry form validation.
- Accessible loading, error, and success states.
- Cookie consent controls.
- Reduced-motion support.
- Responsive footer and navigation links.

Every visible control must have a defined behavior.

Do not create nonfunctional buttons or fake links.

---

## 7. RESPONSIVE DESIGN AND ACCESSIBILITY

Design for:

- Small mobile devices.
- Larger smartphones.
- Tablets.
- Laptops.
- Desktop monitors.
- Large screens.

Use mobile-first CSS and fluid layouts.

Test at representative viewport widths, including approximately 320, 375, 768, 1024, and 1440 CSS pixels.

Requirements:

- No unintended horizontal scrolling.
- Navigation remains usable on touch devices.
- Images do not overflow containers.
- Forms remain readable and usable on small screens.
- Buttons and links have appropriate touch targets.
- Keyboard users can navigate all interactive elements.
- Focus indicators remain visible.
- Images use appropriate alternative text.
- Decorative images use empty alternative text when appropriate.
- Dialogs and lightboxes support keyboard operation and focus management.
- Form fields have persistent, programmatic labels.
- Error messages are understandable and associated with relevant fields.
- Video controls are accessible.
- Color is never the only way information is communicated.
- Honor `prefers-reduced-motion`.

Target WCAG 2.2 AA accessibility practices where applicable.

Do not claim conformance without an actual audit.

---

## 8. IMAGE, VIDEO, AND PERFORMANCE STRATEGY

Photography and cinematography are the core product. Image quality matters, but performance is equally important.

Implement:

- Responsive images using `srcset` and `sizes`.
- WebP or AVIF where supported, with appropriate fallbacks.
- Explicit image dimensions or aspect ratios to reduce layout shifts.
- Lazy loading for below-the-fold images.
- High-priority loading only for the actual LCP image.
- Proper image compression without destructive quality loss.
- Thumbnail variants for portfolio cards.
- Optimized poster images for videos.
- Deferred video loading where possible.
- Self-hosted or approved CDN-hosted media as appropriate.

Do not lazy-load the primary LCP image by default.

Do not embed large, autoplaying video files across multiple sections.

If a third-party video service is used, evaluate its privacy implications and defer loading it until the relevant user action or consent where required.

### Performance targets

Aim for the following Core Web Vitals at the 75th percentile of real-user visits:

- LCP: 2.5 seconds or less.
- INP: 200 milliseconds or less.
- CLS: 0.1 or less.

Also target:

- Minimal unnecessary JavaScript.
- Minimal render-blocking resources.
- Efficient caching.
- Gzip or Brotli compression when supported.
- No unnecessary third-party scripts.
- Responsive image delivery.
- Sensible media file sizes.

These are targets to test, not results to claim in advance.

---

## 9. FUTURE BACKEND: PHP AND SQL

After the frontend has been designed and approved, develop the backend as a separate phase.

Use:

- A currently supported PHP version, preferably PHP 8.4 or newer if compatible with the hosting environment.
- MySQL or MariaDB.
- PDO with prepared statements.
- Server-side validation.
- Secure session handling.
- A clear separation between routing, business logic, database access, and templates.

Prefer a maintainable PHP architecture over a collection of unrelated scripts.

Do not expose database credentials, application secrets, or private configuration in public files.

Use environment variables or a protected configuration mechanism appropriate for the deployment environment.

### 9.1 Backend architecture

A possible structure is:

```text
studio-website/
├── public/
│   ├── index.php
│   ├── assets/
│   ├── uploads/
│   └── .htaccess
├── app/
│   ├── Controllers/
│   ├── Models/
│   ├── Services/
│   ├── Middleware/
│   ├── Validation/
│   ├── Views/
│   └── Helpers/
├── config/
├── database/
│   ├── migrations/
│   └── seeds/
├── storage/
│   ├── logs/
│   └── private/
├── routes/
├── tests/
├── .env.example
├── .gitignore
└── README.md
```

Adapt the architecture to the chosen routing approach and hosting environment.

The public web root must not expose private storage, application configuration, logs, database dumps, or development files.

If the hosting provider does not allow the application root to be separated from the web root, implement an appropriate hosting-specific protection strategy.

### 9.2 Database design

Design a normalized relational database that supports at least:

**Administrators**

- ID.
- Name.
- Email.
- Password hash.
- Role.
- Account status.
- Created and updated timestamps.
- Last login timestamp.

**Projects**

- ID.
- Title.
- URL slug.
- Description.
- Category.
- Location.
- Event date, if authorized.
- Cover image.
- Publication status.
- SEO title and description.
- Published timestamp.
- Created and updated timestamps.

**Media**

- ID.
- Project ID where applicable.
- Media type.
- Storage key or relative path.
- Alternative text or caption.
- Sort order.
- Dimensions and file metadata.
- Publication status.
- Created timestamp.

**Services**

- ID.
- Title.
- Slug.
- Description.
- Display order.
- Publication status.

**Testimonials**

- ID.
- Approved display name.
- Testimonial text.
- Optional related project.
- Consent or publication approval record.
- Display order.
- Publication status.

**Inquiries**

- ID.
- Client name.
- Email.
- Phone, if supplied.
- Event type.
- Event date, if supplied.
- Venue or location, if supplied.
- Estimated guest count or budget range, if the business chooses to request it.
- Message.
- Consent records where applicable.
- Submission status.
- Created timestamp.

**Analytics events or summaries**

- A privacy-conscious event or aggregated reporting structure, selected according to the analytics approach.
- Event type and timestamp.
- Relevant non-identifying dimensions.
- Consent status or collection eligibility where appropriate.

**Cookie or consent preferences**

- Only the minimum data necessary for the chosen consent implementation.
- Prefer client-side storage for ordinary consent preferences unless server-side records are genuinely required.
- Do not create unnecessary permanent identifiers or collect excessive personal information.

Define primary keys, foreign keys, unique constraints, indexes, deletion behavior, and migration scripts.

Explain why each table exists and how the relationships work.

Do not store uploaded image or video binaries directly in SQL unless there is a compelling, documented reason. Store files in appropriate media storage and retain the necessary metadata in the database.

---

## 10. CUSTOM ADMIN DASHBOARD

Develop a protected `/admin` area for authorized studio administrators.

The dashboard should use the same brand identity while prioritizing operational clarity over decorative design.

### 10.1 Dashboard overview

Display useful operational metrics:

- Published projects.
- Draft projects.
- Total media assets.
- New inquiries.
- Pending inquiries.
- Recent content updates.
- Website visits and reporting-period comparisons, when actual analytics data is available.

Do not display invented statistics.

### 10.2 Portfolio management

Administrators must be able to:

- Create a project.
- Edit a project.
- Save drafts.
- Publish and unpublish projects.
- Delete projects after appropriate confirmation.
- Assign project categories.
- Edit project metadata.
- Select a cover image.
- Reorder photographs.
- Preview projects before publication.
- Update SEO metadata.

### 10.3 Media management

Allow administrators to:

- Upload photographs.
- Upload approved video files where the storage strategy supports them.
- Add external video embeds from approved providers.
- Replace media.
- Update captions and alternative text.
- Reorder media.
- Remove media.
- View media processing or upload errors.

Implement secure file validation. Do not trust file extensions or browser-provided MIME types alone.

Validate actual file content, permitted formats, size limits, and storage paths. Generate safe filenames. Prevent executable uploads and path traversal. Consider image re-encoding and separate media storage.

Apply CSRF protection and authorization checks to upload, replacement, deletion, and publication actions.

### 10.4 Testimonial management

Administrators must be able to:

- Add and edit testimonials.
- Record whether publication was approved.
- Associate a testimonial with a project if appropriate.
- Publish or unpublish it.
- Remove it when permission is withdrawn.

Do not fabricate testimonials or imply that a fictional person is a real client.

### 10.5 Inquiry management

Provide:

- Inquiry list.
- Inquiry detail view.
- Status management.
- Date and event-type filters.
- Search.
- Internal notes, if needed.
- A way to record follow-up activity.

Protect client contact details from unauthorized access. Do not expose inquiries through public endpoints.

### 10.6 Administrative usability

Implement:

- Pagination.
- Search and filters.
- Empty states.
- Validation errors.
- Success and failure messages.
- Confirmation before destructive operations.
- Accessible forms.
- Responsive tables or alternative mobile layouts.

The admin panel must be fully functional, not merely a dashboard mockup.

---

## 11. APPLICATION SECURITY REQUIREMENTS

Treat security as a design requirement throughout development, not a final cosmetic addition.

### Authentication and authorization

Implement:

- Secure password hashing using PHP's `password_hash()` and verification using `password_verify()`.
- A supported password-hashing algorithm such as Argon2id where available.
- Secure session cookies using `Secure` on HTTPS, `HttpOnly`, and an appropriate `SameSite` policy.
- Session ID regeneration after authentication and privilege changes.
- Idle and absolute session expiration policies.
- Rate limiting and progressive login throttling.
- Secure password reset if password recovery is provided.
- Role-based access control if multiple administrative roles exist.
- Server-side authorization on every protected operation.

Do not rely on hiding admin buttons or routes in JavaScript as an access-control mechanism.

Avoid public administrator registration. Establish the initial administrator through a controlled setup or provisioning procedure.

### Database security

- Use PDO prepared statements.
- Avoid concatenating untrusted input into SQL queries.
- Validate input on the server.
- Use least-privilege database accounts.
- Keep database credentials outside the public web root.
- Restrict production database access.
- Use migrations and controlled schema changes.
- Avoid displaying SQL errors to visitors.

### Cross-site scripting and request forgery

- Contextually escape untrusted output.
- Sanitize rich text using a well-maintained allowlist-based sanitizer if rich text is supported.
- Implement CSRF tokens for state-changing operations.
- Validate request methods and content types.
- Avoid unsafe DOM insertion methods with untrusted content.
- Add an appropriate Content Security Policy.
- Consider additional security headers, including HSTS after HTTPS is correctly configured, `X-Content-Type-Options`, an appropriate `Referrer-Policy`, and suitable framing restrictions.

### File upload security

- Enforce an allowlist of file types.
- Verify file content rather than trusting the extension.
- Apply size and dimension limits.
- Generate unique storage filenames.
- Reject executable or unexpected formats.
- Prevent directory traversal.
- Store originals and generated variants according to a defined storage policy.
- Keep private or unpublished media inaccessible through public URLs.
- Avoid serving uploads with executable permissions.
- Protect against malicious SVG uploads or disallow SVG uploads unless safely sanitized.
- Apply malware scanning when supported by the deployment environment.

### Production configuration

- Force HTTPS in production.
- Keep debug mode disabled.
- Protect secrets and environment configuration.
- Configure secure error logging.
- Prevent directory listing.
- Protect backup files, SQL dumps, and source configuration.
- Establish database and media backups.
- Document backup restoration.
- Keep PHP and dependencies supported and patched.

Do not claim the website is completely secure. Perform security checks, identify residual risks, and document what remains untested.

---

## 12. COOKIE CONSENT AND PRIVACY CONTROLS

Implement a genuine cookie and tracking preference interface.

The goal is not to indiscriminately save cookies or monitor visitors. It is to provide necessary functionality, respect visitor preferences, and collect only appropriate analytics data.

### 12.1 Consent interface

Create a restrained, branded cookie-consent panel that matches the studio's visual identity.

Offer:

- Accept all.
- Reject optional cookies.
- Customize preferences.
- Save preferences.
- Reopen cookie settings from the footer.

Use separate categories where applicable:

- Strictly necessary.
- Analytics.
- Marketing.

Strictly necessary cookies should be limited to those required for the requested service. Do not allow optional analytics or marketing scripts to run before valid consent where consent is required.

### 12.2 Consent persistence

- Store the visitor's preference using an appropriate first-party mechanism.
- Record the consent categories, preference version, and timestamp where necessary.
- Do not store sensitive personal data in cookies.
- Set sensible expiration and renewal behavior.
- Provide a way to withdraw consent.
- Respect consent across page navigation.
- Do not treat dismissal of the banner as acceptance.
- Do not use deceptive button styling to push visitors toward acceptance.
- Do not fingerprint visitors or circumvent browser privacy controls.

For session cookies, use secure attributes and scope them appropriately.

### 12.3 Privacy compliance

Design with applicable Indian privacy requirements, including the Digital Personal Data Protection Act, 2023, and applicable rules and commencement provisions in force at deployment, in mind. Assess other applicable jurisdictions if the studio targets visitors or clients abroad.

Document:

- What data is collected.
- Why it is collected.
- How long it is retained.
- Who can access it.
- Which third-party providers receive it.
- How users can contact the studio about their data.
- How consent can be changed where relevant.

Do not claim legal compliance solely because a banner exists. Require a review of the actual data flows, third-party scripts, policies, and applicable law.

---

## 13. WEBSITE ANALYTICS AND VISITOR COUNTS

The owner wants to understand how many people visit the website and which content attracts attention.

Design an analytics system that provides useful reporting without unnecessary surveillance.

### 13.1 Reporting requirements

Where data is available, report:

- Visits or sessions.
- Page views.
- Most visited pages.
- Traffic sources and referrers.
- Device categories.
- Popular portfolio projects.
- Film-page engagement.
- Inquiry form starts and successful submissions.
- Date-range comparisons.

Define each metric precisely. Do not label page views as unique visitors.

### 13.2 Analytics implementation options

Evaluate:

- A privacy-conscious, self-hosted or first-party analytics solution.
- A lightweight custom aggregate event system.
- A third-party analytics service, such as Google Analytics 4, if the studio explicitly chooses it.

Recommend one approach based on operational complexity, privacy, hosting limitations, reliability, and reporting needs.

Do not install several analytics systems unnecessarily.

For custom analytics, define:

- A limited event schema.
- Duplicate-event handling.
- Appropriate rate limiting.
- Bot and automated-traffic filtering where feasible.
- Retention limits.
- Aggregation and deletion policies.
- Access restrictions for analytics reports.

Do not count every HTTP request as a human visitor. Do not describe a cookie-based count as perfectly accurate.

Do not collect sensitive form contents, passwords, full IP addresses, or unnecessary personal identifiers in analytics events.

Analytics requiring consent must respect the consent decision. A privacy-preserving, cookieless implementation must still be assessed for applicable legal requirements; do not assume that cookieless automatically means consent is unnecessary.

### 13.3 Admin analytics view

Create an analytics dashboard with:

- A selectable reporting period.
- Summary metrics.
- Page-level performance.
- Traffic-source breakdown.
- Portfolio engagement.
- Inquiry conversion metrics.

Clearly distinguish real analytics from demo data during frontend development.

---

## 14. SEO AND SEARCH ENGINE OPTIMIZATION

SEO must be implemented in both the frontend and the later PHP backend.

The site should be structured so that search engines can discover, crawl, understand, and index its publicly accessible content.

### 14.1 Technical SEO

Implement:

- Semantic HTML.
- Descriptive page titles.
- Unique meta descriptions.
- A logical heading hierarchy.
- Canonical URLs.
- Clean, stable, human-readable URL slugs.
- Internal linking.
- A custom 404 response with an actual HTTP 404 status.
- Correct HTTP status codes.
- A production `robots.txt`.
- An automatically generated XML sitemap.
- Appropriate image alternative text.
- Crawlable navigation links.
- Redirect rules for changed slugs.
- HTTPS.
- Correct handling of draft and unpublished projects.

Do not block CSS or JavaScript files required for rendering.

Do not expose private admin pages, private media, test environments, or sensitive endpoints through public sitemaps.

A robots.txt exclusion is not a security control. Protect private resources through authentication and authorization.

### 14.2 XML sitemap

Generate a valid XML sitemap, or a sitemap index if the site becomes large.

Include eligible canonical public URLs, such as:

- Home page.
- Services pages.
- Public portfolio index.
- Published wedding stories.
- Public cinematography pages.
- About and inquiry pages, where appropriate.

Exclude:

- Admin routes.
- Draft projects.
- Unpublished media.
- Login and password-reset endpoints.
- Duplicate URLs and redirecting URLs.
- Pages that should not be indexed.

Use accurate modification dates. Add image sitemap information when useful.

For a static prototype, provide a development sitemap example. In the PHP phase, implement automatic sitemap generation from published database content.

### 14.3 Structured data

Use appropriate Schema.org structured data when supported by the actual business information.

Evaluate:

- `Organization` or `LocalBusiness`, where appropriate.
- `Service`.
- `BreadcrumbList`.
- `ImageObject`.
- `VideoObject` for eligible publicly accessible video content.

Do not invent ratings, reviews, addresses, social profiles, business hours, or credentials.

Ensure structured data matches the visible page content and current search engine guidelines.

### 14.4 Image and video SEO

Implement:

- Descriptive image filenames.
- Appropriate alternative text.
- Relevant project titles and descriptions.
- Optimized image formats.
- Captions where helpful.
- Descriptive video titles.
- Video poster images.
- Useful video metadata.
- Internal links between relevant stories and services.

Do not stuff keywords into filenames or alternative text.

### 14.5 Keyword strategy

Develop an initial keyword research framework around search intent, such as:

- Wedding photographer in [actual city].
- Wedding cinematography in [actual city].
- Pre-wedding photography in [actual city].
- Destination wedding photographer in India.
- Destination wedding cinematography.
- Wedding photography and film packages.

Do not publish these placeholders as literal keywords when the location is unknown.

Ask for the studio's actual operating locations and service areas before writing location-specific SEO copy.

Create unique metadata for every important page and project.

### 14.6 Search performance

Use:

- Google Search Console.
- XML sitemap submission.
- Relevant analytics.
- Lighthouse or PageSpeed Insights.
- Structured-data validation.
- Crawl and indexation checks.

Do not promise first-page rankings or guaranteed organic traffic.

---

## 15. CONTENT MANAGEMENT AND MEDIA WORKFLOW

The finished site should allow the owner to manage content without modifying source code.

Define the workflow for:

1. Uploading a photograph or film.
2. Validating and processing the asset.
3. Adding captions, alternative text, and metadata.
4. Assigning it to a wedding story.
5. Previewing the story.
6. Publishing the project.
7. Updating its sitemap eligibility.
8. Replacing or deleting media.
9. Managing related cache invalidation.

Separate publication status from upload status.

Support draft, published, and archived states where appropriate.

Define what happens to media when a project is deleted. Prevent accidental orphaned files and unintended deletion of assets reused by other projects.

If large video hosting is better handled by an external provider or object-storage service, explain the trade-offs and costs before implementing the integration.

---

## 16. TESTING AND QUALITY ASSURANCE

Create a test plan for the frontend and backend.

### Frontend tests

Verify:

- Navigation links.
- Mobile menu.
- Responsive layouts.
- Portfolio filtering.
- Lightbox behavior.
- Keyboard accessibility.
- Video interactions.
- Form validation.
- Error states.
- Cookie preference persistence.
- Consent withdrawal.
- Image loading and fallbacks.
- Reduced-motion behavior.
- Browser console errors.

### Backend tests

Verify:

- Valid and invalid login attempts.
- Session regeneration.
- Logout and session expiry.
- Authorization for each protected action.
- Input validation.
- CSRF protection.
- SQL injection resistance.
- XSS prevention.
- File-upload restrictions.
- Unauthorized media access.
- Inquiry submission and storage.
- Inquiry privacy.
- Content publishing and unpublishing.
- Database migrations.
- Error handling and logging.
- Backup and restore procedures.

### SEO tests

Verify:

- Titles and meta descriptions.
- Canonical URLs.
- XML sitemap validity.
- robots.txt behavior.
- Status codes.
- Redirects.
- Structured data.
- Image alternative text.
- Crawlability of published projects.
- Exclusion of private routes.

### Performance and accessibility tests

Use appropriate tools such as:

- Lighthouse.
- PageSpeed Insights.
- Browser developer tools.
- axe or equivalent accessibility auditing tools.
- Automated tests and manual keyboard checks.
- PHP and database testing tools where appropriate.

Document any failed checks and their fixes.

---

## 17. DEVELOPMENT WORKFLOW: BUILD IN PHASES

Do not attempt to generate the entire website in one enormous code response.

Work through the following phases and maintain continuity between them.

### Phase 0: Discovery and planning

Before implementation:

- Review the reference websites where accessible.
- Identify the primary user journeys.
- Define the design system.
- Create the information architecture.
- Recommend the final typography pairing.
- Document the main responsive layouts.
- Define the initial frontend architecture.
- List unknown business information.
- Identify privacy, performance, and security considerations.

Produce:

1. Design brief.
2. Page inventory.
3. Component inventory.
4. Design tokens.
5. Project folder structure.
6. Implementation roadmap.
7. Acceptance checklist.

Use reasonable assumptions for nonessential missing details. Ask only for information that materially affects the design or implementation.

### Phase 1: Design system and frontend foundation

Build:

- Design tokens.
- CSS reset.
- Typography.
- Global layout.
- Header and navigation.
- Footer.
- Buttons.
- Form controls.
- Reusable sections.
- Responsive breakpoints.

Test the foundation before moving forward.

### Phase 2: Frontend pages

Build the home page first, then portfolio, individual project templates, films, services, about, inquiry, and legal pages.

Use realistic placeholder content and authorized sample imagery.

Ensure the visual system remains consistent while giving each page a distinct purpose.

### Phase 3: Frontend functionality and refinement

Implement and test:

- Navigation.
- Galleries.
- Lightboxes.
- Film interactions.
- Forms.
- Cookie consent.
- Responsive behavior.
- Accessibility.
- Loading and error states.

Refine the visual experience based on screenshots and actual browser behavior.

### Phase 4: Frontend acceptance and handoff

Before backend development:

- Test every page.
- Test representative mobile and desktop layouts.
- Fix broken links and visual inconsistencies.
- Audit accessibility and performance.
- Document known limitations.
- Confirm the design and interactions are ready for backend integration.

At this checkpoint, the site should work as a frontend prototype. Do not misrepresent mock form submissions or mock analytics as production features.

### Phase 5: Backend architecture and database

Only after the frontend checkpoint:

- Establish the PHP application architecture.
- Configure the database.
- Create migrations.
- Implement models and services.
- Add routing and validation.
- Configure local development.
- Establish environment configuration.
- Connect frontend templates to server-side content.

### Phase 6: Admin dashboard and content management

Implement authentication, authorization, project management, media uploads, services, testimonials, inquiry management, and analytics reporting.

### Phase 7: Security, privacy, SEO, and deployment

Complete:

- Security checks.
- Cookie and privacy behavior.
- Production SEO.
- XML sitemap generation.
- HTTPS configuration.
- Database and media backups.
- Error logging.
- Performance checks.
- Deployment documentation.

### Phase 8: Production acceptance

Provide a final checklist of tested, failed, and unverified requirements.

Do not declare the site production-ready until critical requirements have been tested in the target environment.

---

## 18. CODING AND RESPONSE RULES

Follow these rules throughout the project.

1. Work on one clearly defined checkpoint at a time.
2. Provide complete, runnable files for each implementation step.
3. Include the exact path and filename for every code file.
4. Never use unexplained ellipses or omit critical code from a file described as complete.
5. Keep code modular, readable, and consistently formatted.
6. Explain where each file belongs and how it connects to other files.
7. Include commands for running and testing the implementation.
8. State any prerequisites or environment assumptions.
9. Use real browser testing when the necessary tools are available.
10. Never claim a test passed unless it was executed and its result was observed.
11. Separate implemented features from planned features.
12. Explain security-sensitive decisions and their limitations.
13. Avoid adding unnecessary dependencies.
14. Do not overwrite previously implemented working code without understanding the existing structure.
15. Before changing architecture, explain why the change is necessary.
16. When a required external service or credential is unavailable, create a clear integration boundary and explain how to configure it.
17. Use placeholders for unknown business information.
18. Keep all development aligned with the approved design system and technology stack.

### Maintain project continuity

At the end of every checkpoint, provide a concise handoff report containing:

- **Checkpoint completed:** What was built.
- **Files created or modified:** Exact paths.
- **Functionality:** What works.
- **Tests performed:** Actual results.
- **Outstanding issues:** Anything incomplete or failing.
- **Next checkpoint:** The next logical implementation step.
- **Decisions and assumptions:** Important choices to preserve.

Maintain an updated project README and implementation checklist so that work can continue in another conversation without losing the architecture or progress.

Do not start a later phase until the current checkpoint is sufficiently complete, unless a dependency requires a deliberate change of order.

---

## 19. ACCEPTANCE CRITERIA

The project is successful when the following requirements are satisfied.

### Visual design

- [ ] The website has an original, premium editorial identity.
- [ ] The supplied palette and typography are applied consistently.
- [ ] Photography and cinematography remain the primary focus.
- [ ] The layouts are polished and intentional.
- [ ] The design is responsive across mobile, tablet, and desktop.
- [ ] The website does not resemble a generic template.

### Frontend

- [ ] All agreed public pages are implemented.
- [ ] Navigation and calls to action work.
- [ ] Portfolio and project templates work with mock data.
- [ ] Galleries and video interactions are functional.
- [ ] Forms have validation and clear feedback.
- [ ] No critical console errors or broken internal links remain.
- [ ] Accessibility and responsive behavior have been tested.

### Backend and administration

- [ ] The PHP application uses a maintainable architecture.
- [ ] SQL schema and migrations are documented.
- [ ] Admin authentication and authorization work.
- [ ] Project and media CRUD operations work.
- [ ] Services and testimonial management work.
- [ ] Inquiry records are stored and protected.
- [ ] Invalid and unauthorized requests are rejected.
- [ ] Errors are handled safely.

### Privacy and security

- [ ] Consent choices are respected.
- [ ] Optional tracking is appropriately gated.
- [ ] Visitors can change or withdraw preferences.
- [ ] Passwords are hashed securely.
- [ ] Sessions and state-changing requests are protected.
- [ ] Database queries use prepared statements.
- [ ] Upload restrictions have been tested.
- [ ] Secrets and private files are not publicly accessible.
- [ ] Backup and recovery procedures are documented.

### SEO and analytics

- [ ] Public pages have appropriate metadata.
- [ ] Published projects have clean URLs.
- [ ] The XML sitemap is valid and automatically maintained in production.
- [ ] robots.txt is configured appropriately.
- [ ] Structured data is accurate where used.
- [ ] Analytics reports use actual collected data.
- [ ] Visitor metrics are defined accurately.
- [ ] No private inquiry content is leaked into analytics.

### Deployment

- [ ] Production configuration is documented.
- [ ] HTTPS and error logging are configured.
- [ ] Database migrations and backups are documented.
- [ ] Media storage is configured.
- [ ] Known limitations and unverified checks are disclosed.
- [ ] A repeatable deployment procedure is available.

---

## 20. YOUR FIRST RESPONSE TO THIS PROMPT

Begin with Phase 0.

Do not generate the entire website immediately.

First, provide:

1. A concise design analysis of the two reference websites, distinguishing verified observations from design hypotheses.
2. A proposed original visual direction for the studio.
3. The final recommended typography and color system.
4. The complete website page structure.
5. The reusable UI component inventory.
6. The proposed frontend folder structure.
7. The initial content and imagery requirements.
8. A frontend-first implementation roadmap with measurable checkpoints.
9. The main performance, accessibility, privacy, and SEO decisions.
10. Any essential questions that must be answered before the first implementation step.

If browser inspection is unavailable, explicitly state that limitation and work from the provided references and design requirements.

Make reasonable assumptions where possible instead of delaying progress with unnecessary questions.

**Final instruction:** Prioritize an exceptional visual experience first, working interactions second, and secure backend integration afterward. Maintain the simplicity of a luxury editorial website while building the technical foundations needed for a reliable production system.

Start with Phase 0 and wait for approval before beginning Phase 1.
