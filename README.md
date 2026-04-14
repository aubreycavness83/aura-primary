# Aura Primary Care Website

A static multi-page website for Aura Primary Care & Wellness.

## Overview

This project is a responsive marketing site for a healthcare practice in Phoenix, AZ. It includes a homepage, service detail pages, and contact/about pages. Shared navigation and footer content are loaded dynamically to keep layout updates consistent across all pages.

## Live Site Purpose

- Present the practice brand and value proposition
- Highlight primary care and wellness services
- Provide clear navigation to service-specific pages
- Offer contact and appointment call-to-actions

## Tech Stack

- HTML5 (multi-page structure)
- CSS3 (`styles.css`)
- Vanilla JavaScript (`script.js`)
- Bootstrap 5.3 (CDN)
- Google Fonts (Cinzel, Roboto)

## Project Structure

```text
.
|-- index.html
|-- about-us.html
|-- contact.html
|-- primary-care.html
|-- lab-services.html
|-- telehealth.html
|-- weight-management.html
|-- mental-health.html
|-- womens-health.html
|-- navbar.html
|-- footer.html
|-- styles.css
|-- script.js
`-- images/
```

## Key Features

- Hero carousel on the homepage (Bootstrap)
- Reusable navbar/footer loaded with JavaScript `fetch`
- Service cards and dedicated service pages
- FAQ accordion-like toggle behavior on service pages
- Responsive layout across desktop/tablet/mobile

## JavaScript Behavior

`script.js` initializes and manages:

- `initCarousel()` for homepage slide behavior
- `loadNavbar()` to inject `navbar.html` into `#navbar-placeholder`
- `loadFooter()` to inject `footer.html` into `#footer-placeholder`
- `initServiceFaq()` to toggle FAQ visibility and `aria-expanded`

## Run Locally

Because this site uses `fetch()` for partial HTML files, use a local server instead of opening files directly.

### Option 1: VS Code Live Server

1. Install the Live Server extension.
2. Open the project folder in VS Code.
3. Right-click `index.html` and select **Open with Live Server**.

### Option 2: Python HTTP Server

From the project root:

```bash
python -m http.server 5500
```

Then open:

```text
http://localhost:5500/index.html
```

## Deployment

This project can be deployed to any static host:

- GitHub Pages
- Netlify
- Vercel (static)
- Cloudflare Pages

For GitHub Pages, publish from the repository root and ensure all file paths remain relative (as currently implemented).

## Notes

- Some page `<title>` values are currently shared and may be updated for stronger SEO per page.
- The contact form on `index.html` is currently UI-only (`action="#"`) and does not submit to a backend.

## Author

Created and maintained by @aubreycavness83.
