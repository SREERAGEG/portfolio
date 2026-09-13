# Sreerag E G - RPA & Automation Engineer Portfolio

A modern, highly-interactive responsive portfolio website showcasing the professional background and expertise of Sreerag E G, an RPA & Automation Engineer specializing in designing distributed, HIPAA-compliant process-automation infrastructure using Python, FastAPI, and AWS.

🔗 **Interactive Portfolio:** [sreerageg.github.io/portfolio/](https://sreerageg.github.io/portfolio/)

---

## 🌟 Features

### Modern Design
- **Futuristic Glassmorphic Aesthetic**: Frosted glass panels styled with customized Tailwind CSS backdrops, thin translucent borders, and glowing interactive hover states.
- **Dynamic Theme Engine**: Auto-adapts to browser/OS light/dark preferences and supports manual toggling between dark-cosmic and light-frosted modes.
- **Micro-Animations & Visuals**: Floating animated gradient blobs in the background, layout-reactive scaling, and fluid text transitions.
- **Single-Page Flow**: Interactive vertical scrolling offset navigation with active-link highlights.

### Technical & Interactive Features
- **Interactive RPA Bot Simulator Console**: A live terminal mockup where visitors select configurations (e.g. `claim_submitter.py`, `eob_data_extractor.py`, `self_healing_agent.py`) and "execute" the scripts to stream color-coded, realistic runtime logs, progress bars, self-healing occurrences, and HIPAA-secure final JSON payload envelopes.
- **AWS Pipelines Visualizer**: An interactive, keyboard-accessible SVG-based systems architecture diagram displaying the orchestration workflow (`JSON Payload` ➔ `FastAPI Router` ➔ `AWS SQS Broker` ➔ `AWS ECS Container Workers` ➔ `Commercial Portals`). Activating a diagram node (click or Enter/Space) displays descriptive details about each stage dynamically.
- **Certificates Gallery**: A dedicated [certificates.html](certificates.html) page that lazy-loads credential images/PDFs directly from a public Google Drive folder via the Drive API, with skeleton loaders, search, type filters, and a lightbox preview.
- **Precompiled Tailwind, Zero Runtime Compilation**: Utility CSS is built locally with the Tailwind CLI (`npm run build`) and committed as a static stylesheet — no Play CDN compiler in production.
- **Serverless Contact Pipeline**: The contact form posts to Formspree for email delivery and optionally logs submissions to a Supabase table; a graceful inline error card covers delivery failures.

### Portfolio Sections
1. **Hero**: Visual introduction, dynamic typewriter roles loop, resume download trigger, and social shortcuts.
2. **Bot Console**: Interactive demonstrations of running live bot scripts.
3. **AWS Orchestration**: Interactive SVG system graph of asynchronous worker infrastructure.
4. **Experience**: Structured timeline representing professional milestones, featuring key achievements and throughput metrics.
5. **Projects**: Showcase cards with layout hover effects mapping Claim Extraction, API Gateways, POM Overhauls, and Accessibility apps.
6. **Skills**: Divided categories tracking RPA, Backend, Cloud, Languages, and US Healthcare Insurance domain specializations.
7. **Education**: B.Tech degree parameters and professional verification paths.
8. **Contact**: Dedicated layout detailing touchpoints and validation triggers.

---

## 🚀 Technologies Used

### Frontend Stack
- **HTML5**: Semantic layout (two pages: `index.html`, `certificates.html`).
- **Tailwind CSS v3**: Compiled locally via the CLI (`assets/css/input.css` ➔ `assets/css/styles.css`), configured in [tailwind.config.js](tailwind.config.js). The compiled stylesheet is committed so the site deploys as pure static files.
- **Vanilla JavaScript**: Programmatic engines ([assets/js/main.js](assets/js/main.js)) managing typing effects, bot simulation logs, interactive SVGs, contact validation, and dark/light modes.
- **Google Drive API v3**: Client-side fetch of the certificates gallery (API key injected at deploy time — see [SECURITY.md](SECURITY.md)).
- **Supabase + Formspree**: Visitor counter / message logging and contact email delivery.
- **Google Fonts**: `Outfit` (headings), `Plus Jakarta Sans` (body text), and `Fira Code` (monospace code/terminal block).

---

## 📁 Project Structure

```
portfolio/
├── index.html                     # Main one-page portfolio (structure & content)
├── certificates.html              # Certificates gallery (lazy-loads from Google Drive)
├── assets/
│   ├── favicon.svg                # Custom page tab icon
│   ├── css/
│   │   ├── input.css              # Tailwind entry file
│   │   ├── styles.css             # Compiled Tailwind output (committed)
│   │   └── custom.css             # Hand-written glassmorphism & animation styles
│   ├── js/
│   │   └── main.js                # All homepage JS (theme, console, form, counter)
│   ├── img/
│   │   └── myphoto.jpg            # Developer profile portrait
│   └── resume/
│       └── Sreerag_EG_resume_rpa_updated.pdf  # Latest PDF resume
├── .github/workflows/
│   ├── deploy.yml                 # Pages deploy: build CSS, inject API key, publish
│   └── keep-supabase-alive.yml    # Periodic ping to prevent Supabase free-tier pause
├── SECURITY.md                    # Security notes & audit log
├── robots.txt / sitemap.xml       # Search engine directives
├── tailwind.config.js             # Tailwind theme configuration
├── local-config.js                # (gitignored) Local dev Google API key
└── package.json                   # Tailwind build scripts
```

---

## 🎨 Design System

### Color Palette
- **Deep Space Theme (Dark)**: Cosmic dark background (`#040610`), card slots (`rgba(10, 15, 30, 0.45)`), neon borders, and glowing highlights (Sky Blue `#0ea5e9`, Neon Violet `#a855f7`, Emerald Green `#10b981`).
- **Frosted Light Theme (Light)**: Clean background (`#f8fafc`), panels (`rgba(255, 255, 255, 0.65)`), soft drop shadows, and sky accents.
- **Monospace Elements**: Deep slate backing (`#02040a`) with terminal text classes.

### Typography
- **Headings**: Outfit (sans-serif)
- **Body Text**: Plus Jakarta Sans (sans-serif)
- **Code & Terminals**: Fira Code (monospaced)

---

## 🔧 Customization Guide

### Build & Development
```bash
npm install        # install Tailwind (package-lock.json pins exact versions)
npm run dev        # watch mode: rebuilds styles.css on every change
npm run build      # one-off minified production build
```

### Theme Customization
To adjust the theme colors or fonts, edit [tailwind.config.js](tailwind.config.js):
```javascript
theme: {
    extend: {
        colors: {
            darkBg: '#040610',
            brandBlue: '#0ea5e9',
            // Adjust colors here
        }
    }
}
```
Then run `npm run build` to regenerate `assets/css/styles.css`.

### Bot Simulation Customization
To add, modify, or delete terminal log lines, edit the `BOT_LOGS` object in [assets/js/main.js](assets/js/main.js).

---

## 🔒 Security Notes

Before reporting security findings (human or AI-assisted audit), read [SECURITY.md](SECURITY.md). It documents verified non-issues — e.g. the client-side Google Drive API key is referrer-restricted and confirmed safe on 2026-09-12 — so they are not re-reported as new findings.

---

## 👨‍💻 About Sreerag E G

**RPA / Automation Engineer**

### Contact Information
- 📧 Email: sreerageg@gmail.com
- 📱 Phone: +91 95678 70963
- 🔗 LinkedIn: [linkedin.com/in/sreerag-e-g](https://linkedin.com/in/sreerag-e-g)
- 🐙 GitHub: [github.com/sreerageg](https://github.com/sreerageg)
- 📍 Location: Thrissur, Kerala, India

### Professional Experience

- **Automation Engineer (RPA / Python)** at Kalki Safalya Consulting Services LLP (May 2025 - Present)
  - **Bot Orchestration Gateway:** Developed a high-performance FastAPI orchestration layer that dynamically routes 100+ daily bot executions based on JSON payloads.
  - **Scalable Bot Infrastructure:** Deployed a containerized worker pool on AWS ECS, using AWS SQS as a message broker to process 500+ claim-submission bot runs asynchronously per week.
  - **Process Automation at Scale:** Built and shipped 130+ production bots across 40+ commercial portals, increasing throughput by 40% and saving 80+ hours of manual entry monthly.
  - **Self-Healing & Compliance:** Engineered automated error classification and self-healing POM bot logic to cut maintenance overhead by 30%, with sensitive-data masking for HIPAA compliance.

- **Full Stack Developer (Intern)** at Aspire Systems (Nov 2024 - May 2025)
  - **API Engineering:** Developed and optimized 12+ REST API endpoints using Django Rest Framework (DRF) and MySQL, improving query response times by 20%.
  - **Auth Systems:** Implemented secure OAuth 2.0 authentication flows (including Google OAuth), onboarding 200+ internal users.

- **Freelance RPA / Python Developer** (Self-Employed) (May 2024 - Nov 2024)
  - **Legacy Bot Migration:** Restructured and converted 30+ legacy Selenium bots into a modular Page Object Model (POM) framework, reducing bot failure rates by 50%.
  - **Third-Party Integration:** Integrated external REST APIs into bot workflows for automated verification, accelerating form-processing by 15%.

### Featured Projects
1. **Structured Claim-Data Extraction Pipeline (CPF & Claim Retrieval)**: Built schema-driven JSON extraction bots across 11+ claim-payment-fetch and 7+ retrieval portals using canonical ClaimRecord, table pagination, and normalization.
2. **Multi-Portal RPA Bot Orchestrator Gateway**: Implemented payload-driven scheduling and routing using FastAPI, AWS ECS docker container workers, and SQS messaging queues.
3. **Legacy POM Migration & Self-Healing Framework**: Converted Selenium web scrapers into object-oriented modules with auto-classification elements for layout shift detection.
4. **AVI (App for Visually Impaired)**: Accessibility Android application backed by a Python server backend, deep learning object detection, and instant text-to-speech audio feedback.

---

**Built with ❤️ for optimal performance and user experience**

