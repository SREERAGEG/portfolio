# Sreerag E G - SDET & Automation Architect Portfolio

A modern, responsive portfolio website showcasing the professional background and expertise of Sreerag E G, a performance-driven SDET and Automation Architect specializing in engineering distributed automation platforms using Python, FastAPI, and AWS.

## 🌟 Features

### Modern Design
- **Premium Glassmorphism Theme**: Frosted glass panels using backdrop-blur utility classes, border opacity, and card layouts.
- **Dynamic Theme Engine**: Auto-adapts to browser/OS light/dark preferences and supports manual toggle overrides.
- **Interactive Visuals**: Programmatic typing loop, floating background gradient shapes, and interactive scale effects.
- **Single-Page Layout**: Seamless vertical scrolling navigation with an active section-highlighting floating header.

### Technical Features
- **Zero Build Setup**: Clean, single-file HTML5 codebase that runs instantly without npm, Node.js, or compilation pipelines.
- **Performance Optimized**: Low footprint without heavy libraries or frameworks.
- **SEO & Access Ready**: Structured metadata tags, custom keyword setup, and responsive design systems.

### Portfolio Sections
1. **Hero Section**: Introduces Sreerag with typewriter logic, CV download triggers, and social touchpoints.
2. **About**: Professional summary card, statistical achievements, and core expertise callouts.
3. **Experience**: Visual timeline mapping software engineering and automation roles.
4. **Projects**: Detailed glass grid highlighting claims automations, computer vision, and accessibility systems.
5. **Skills**: Skill range progress indicators and quick-view tech stacks.
6. **Education**: Degree details and professional certification panels.
7. **Contact**: Location coordinates, direct links, and a validated contact form.

## 🚀 Technologies Used

### Frontend Stack
- **HTML5**: Semantic document structure.
- **Tailwind CSS Play CDN**: Real-time styling engine utilizing custom config integrations.
- **Vanilla JavaScript**: Coded inline to manage theme changes, mobile menu toggle transitions, typing configurations, and contact form handling.
- **Font Awesome Icons**: Clean vector iconography.
- **Google Fonts**: Outfit (headings) and Plus Jakarta Sans (body).

### Advanced Features
- Tailwind classes for glassmorphic elements (`backdrop-blur-md`, `bg-opacity`, `border-opacity`).
- Browser state persistence via HTML5 `localStorage`.
- Media Query listener (`prefers-color-scheme`) for live system theme updates.

## 📁 Project Structure

```
portfolio/
├── index.html                 # Complete portfolio (HTML, Tailwind Config, and JS logic)
├── assets/
│   ├── favicon.svg           # Custom page tab icon
│   ├── img/
│   │   └── myphoto.jpg       # Developer profile portrait
│   └── resume/
│       └── Sreerag_EG_Resume_2026.pdf # Latest PDF resume
└── README.md                 # Project documentation
```

## 🎨 Design System

### Color Palette
- **Primary**: Light glass panel overlay (`bg-white/45` with border-white/20)
- **Dark Mode**: Dark glass panel overlay (`bg-slate-900/45` with border-white/5)
- **Brand Colors**: Blue (`#3b82f6`) and Purple accent (`#8b5cf6`)
- **Fluid Gradients**: Multi-colored animated blur blobs floating behind the main layout.

### Typography Scale
- **Headings**: Outfit (sans-serif)
- **Body Text**: Plus Jakarta Sans (sans-serif)
- **Responsive**: Fluid typography that scales across mobile, tablet, and desktop viewports.

### Animation System
- Continuous typewriter text looping.
- Pulse and floating keyframe animation for background blobs.
- Smooth card hover scaling and transition highlights.

## 📱 Responsive Design

### Breakpoint System
- **Small Mobile**: 320px - 480px
- **Mobile**: 481px - 768px
- **Tablet**: 769px - 1024px
- **Desktop**: 1025px - 1200px
- **Large Desktop**: 1201px and above

### Mobile Enhancements
- Touch-optimized navigation menu
- Swipe-friendly interactions
- Optimized font sizes and spacing
- Mobile-specific animations
- Performance optimizations for mobile devices

## ⚡ Performance Features

- **Instant Client Render**: Zero framework virtual-DOM overhead or heavy bundling requirements.
- **On-Demand Styles**: Fast page delivery via optimized CDN caching of the Tailwind styling library.
- **Lazy Visual Rendering**: Floating background elements rendered with CSS opacity variables.

### User Experience
- Sub-second loading times.
- Fluid transitions and scale effects.
- Clean color palette that adapts to local light or dark themes.

## 🔧 Customization Guide

### Theme Customization
To update theme colors, open [index.html](file:///c:/Users/sreer/Documents/GitHub/portfolio/index.html) and locate the `<script>` containing `tailwind.config`. You can easily adjust the brand and violetaccent hex colors:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    500: '#3b82f6', // primary blue
                    // ...
                }
            }
        }
    }
}
```

### Content Updates
All content lies within the single [index.html](file:///c:/Users/sreer/Documents/GitHub/portfolio/index.html) file:
- **Bio & Tagline**: Locate and edit the text inside `<section id="home">`.
- **Work Timeline**: Locate the list elements inside `<section id="experience">` to update roles and bullet points.
- **Technical Skills**: Update the tailwind width classes (e.g. `style="width: 95%"`) inside `<section id="skills">` to dynamically adjust the glass progress bars.
- **Contact Channels**: Edit the `mailto:` links and anchors inside `<section id="contact">`.

## 📧 Contact Integration
The portfolio includes multiple contact methods:
- **Email**: Programmatic validation and mailto links.
- **Phone**: Click-to-call anchor tags.
- **Social**: Fast target-blank redirects for LinkedIn and GitHub.

## 🌐 Browser Compatibility
- **Chrome**: ✅ Version 90+
- **Firefox**: ✅ Version 88+
- **Safari**: ✅ Version 14+
- **Edge**: ✅ Version 90+
- **Mobile Browsers**: ✅ iOS Safari, Chrome Mobile, Samsung Internet.

## 🚀 Deployment Options
### Static Hosting
- **GitHub Pages**: Drag-and-drop/git-push folder deployment (No compilation triggers needed).
- **Vercel / Netlify**: Connect repository for automated deployments.

---

## 👨‍💻 About Sreerag E G

**SDET & Automation Architect**

### Contact Information
- 📧 Email: sreerageg@gmail.com
- 📱 Phone: +91 95678 70963
- 🔗 LinkedIn: [linkedin.com/in/sreerag-e-g](https://linkedin.com/in/sreerag-e-g)
- 🐙 GitHub: [github.com/sreerageg](https://github.com/sreerageg)
- 📍 Location: Thrissur, India

### Professional Experience
- **Software Developer (SDET / Automation Architect)** at Kalki Safalya Consulting Services LLP (May 2025 - Present)
  - **Architected a Distributed Automation Gateway:** Developed a high-performance orchestration layer using FastAPI to dynamically route automation tasks based on incoming JSON payloads.
  - **Scalable Infrastructure Deployment:** Deployed a containerized worker pool on AWS ECS, utilizing AWS SQS as a message broker to handle asynchronous claim submissions at scale.
  - **Performance Engineering:** Designed a multi-portal automation platform that increased insurance claim submission speed by 40% while maintaining production-grade reliability.
  - **Reliability & Compliance:** Implemented automated error classification, screenshot evidence capture for audits, and sensitive data masking to maintain strict HIPAA compliance.
  - **Internal Tooling:** Built claims tracking systems using Pandas and integrated browser automations with enterprise Rails backends via message queues.

- **Full Stack Developer (Intern)** at Aspire Systems (Nov 2024 - May 2025)
  - **API Engineering:** Developed and optimized REST APIs using Django Rest Framework (DRF) and MySQL, ensuring seamless data flow for enterprise applications.
  - **Quality Assurance:** Led automated API documentation using Swagger and participated in Agile sprints, focusing on code reviews and modular system design.
  - **Auth Systems:** Implemented secure authentication flows, including Google OAuth and CRUD operations for internal portals.

- **Freelance Python Developer (Automation)** (May 2024 - Nov 2024)
  - **Legacy Transformation:** Converted one-off Selenium scripts into maintainable, framework-compliant code for insurance web applications.
  - **Third-Party Integration:** Integrated external APIs to optimize backend performance and automation reliability.

### Education & Certifications
- **B.Tech Computer Science & Engineering** - Christ College of Engineering (2019-2023) - CGPA: 7.85/10
- **Data Engineering with PySpark** - Self-paced Learning
- **IBM Python for Data Science** - IBM Certified
- **AI For Everyone** - Andrew Ng (Coursera)
- **Django for Web Development** - Udemy

### Technical Skills
- **Languages**: Python (Advanced OOP & Framework Design), SQL, JavaScript, Java
- **Automation**: Playwright, Selenium, Web Scraping, PDF Data Extraction
- **Backend & Orchestration**: FastAPI, Django, REST API Design, Async Processing
- **Cloud & DevOps**: AWS (ECS, SQS, EC2, S3, Lambda), Docker, Git, CI/CD Pipelines
- **Frameworks**: Page Object Model (POM), Error Classification & Self-Healing Logic, Retry Mechanisms
- **Domain Specialization**: US Healthcare Insurance, Claims Processing, HIPAA Compliance, EOB/CMS-1500

### Featured Projects
1. **Insurance Claim Web Automation** - Python, Selenium, Web Scraping, CAPTCHA handling, robust logging, POM
2. **AI-Powered Image Recognition** - TensorFlow, OpenCV (95% accuracy)
3. **AVI (App for Visually Impaired)** - Python backend, Android, Object Detection, audio feedback

### Languages
- **English**: Professional proficiency
- **Malayalam**: Native speaker
- **Hindi**: Professional working proficiency
- **Sanskrit**: Full proficiency

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using modern web technologies for optimal performance and user experience**

*Portfolio designed to showcase full-stack development expertise and passion for clean, maintainable code*

*Last updated: June 2026*
