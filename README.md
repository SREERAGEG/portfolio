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
- **AWS Pipelines Visualizer**: An interactive SVG-based systems architecture diagram displaying the orchestration workflow (`JSON Payload` ➔ `FastAPI Router` ➔ `AWS SQS Broker` ➔ `AWS ECS Container Workers` ➔ `Commercial Portals`). Hovering on diagram nodes displays descriptive details about each stage dynamically.
- **No Compilation Build Setup**: Built directly on single-file HTML5, Tailwind Play CDN configuration, and Vanilla Javascript. Performs instantly on mobile and desktop without packaging systems.

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
- **HTML5**: Semantic layout.
- **Tailwind CSS Play CDN**: Tailwind configurations and utility frameworks.
- **Vanilla JavaScript**: Programmatic engines managing typing effects, bot simulation logs, interactive SVGs, contact validation, and dark/light modes.
- **Font Awesome Icons**: Translucent icons.
- **Google Fonts**: `Outfit` (headings), `Plus Jakarta Sans` (body text), and `Fira Code` (monospace code/terminal block).

---

## 📁 Project Structure

```
portfolio/
├── index.html                 # Complete portfolio (HTML, Tailwind Config, and JS logic)
├── assets/
│   ├── favicon.svg           # Custom page tab icon
│   ├── img/
│   │   └── myphoto.jpg       # Developer profile portrait
│   └── resume/
│       └── Sreerag_EG_resume_rpa_updated.pdf # Latest PDF resume
└── README.md                 # Project documentation
```

---

## 🎨 Design System

### Color Palette
- **Deep Space Theme (Dark)**: Cosmic dark background (`#05070f`), card slots (`rgba(10, 15, 30, 0.45)`), neon borders, and glowing highlights (Sky Blue `#0ea5e9`, Neon Violet `#d946ef`, Emerald Green `#10b981`).
- **Frosted Light Theme (Light)**: Clean background (`#f8fafc`), panels (`rgba(255, 255, 255, 0.65)`), soft drop shadows, and sky accents.
- **Monospace Elements**: Deep slate backing (`#02040a`) with terminal text classes.

### Typography
- **Headings**: Outfit (sans-serif)
- **Body Text**: Plus Jakarta Sans (sans-serif)
- **Code & Terminals**: Fira Code (monospaced)

---

## 🔧 Customization Guide

### Configs Customization
To adjust the theme color extensions or fonts, edit the Tailwind settings in [index.html](file:///c:/Users/sreer/Documents/GitHub/portfolio/index.html):
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                darkBg: '#05070f',
                brandBlue: '#0ea5e9',
                // Adjust colors here
            }
        }
    }
}
```

### Bot Simulation Customization
To add, modify, or delete logging logs inside the interactive terminal, edit the `BOT_LOGS` object located inside the `<script>` tag of `index.html`.

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

