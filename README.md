# Sreerag E G - SDET & Automation Architect Portfolio

A modern, responsive portfolio website showcasing the professional background and expertise of Sreerag E G, a performance-driven SDET and Automation Architect specializing in engineering distributed automation platforms using Python, FastAPI, and AWS.

## 🌟 Features

### Modern Design
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **Dark/Light Theme**: Toggle between dark and light themes with smooth transitions
- **Advanced Animations**: Smooth animations using AOS (Animate On Scroll) library
- **Interactive Elements**: Dynamic typing animation, particle effects, and hover interactions
- **Floating Tech Icons**: Animated floating elements representing programming technologies

### Technical Features
- **Performance Optimized**: Fast loading with debounced scroll events and lazy loading
- **SEO Friendly**: Proper meta tags and structured content
- **Accessibility**: WCAG compliant with keyboard navigation support
- **Cross-Browser Compatible**: Works on all modern browsers
- **Mobile-First Design**: Enhanced mobile interactions and touch-friendly interface

### Portfolio Sections
1. **Hero Section**: Introduction with dynamic typing animation and particle background
2. **About**: Professional summary with statistics and key competencies
3. **Experience**: Timeline view of professional journey with detailed achievements
4. **Projects**: Showcase of featured projects with live demos and source code links
5. **Skills**: Technical skills with animated progress bars and technology stack
6. **Education**: Academic background with certifications and achievements
7. **Contact**: Multiple contact methods with working contact form

## 🚀 Technologies Used

### Frontend Stack
- **HTML5**: Semantic markup with accessibility best practices
- **CSS3**: Modern CSS with custom properties, Grid, and Flexbox
- **Vanilla JavaScript**: Pure JavaScript for optimal performance
- **Font Awesome**: Professional icons and symbols
- **Google Fonts**: Inter and Playfair Display typography
- **AOS Library**: Animate On Scroll for smooth reveal animations

### Advanced Features
- CSS Grid and Flexbox for responsive layouts
- CSS Custom Properties (Variables) for consistent theming
- Intersection Observer API for performance optimization
- Local Storage for theme and preference persistence
- Canvas API for particle effects and animations
- CSS transforms and keyframe animations
- Progressive Web App (PWA) capabilities
- Service Worker for offline functionality

## 📁 Project Structure

```
portfolio/
├── index.html                 # Main HTML file with semantic structure
├── assets/
│   ├── css/
│   │   └── style.css         # Comprehensive responsive stylesheet
│   └── js/
│       ├── script.js         # Main JavaScript functionality
│       └── particles.js      # Particle system and visual effects
└── README.md                 # Project documentation
```

## 🎨 Design System

### Color Palette
- **Primary**: Modern gradient (#667eea to #764ba2)
- **Accent**: Blue (#3b82f6)
- **Success**: Green (#10b981)
- **Warning**: Orange (#f59e0b)
- **Error**: Red (#ef4444)
- **Text**: Dynamic based on theme (light/dark)

### Typography Scale
- **Headings**: Playfair Display (serif) - 1.5rem to 3.75rem
- **Body Text**: Inter (sans-serif) - 0.875rem to 1.125rem
- **Responsive**: Fluid typography that scales across all devices

### Animation System
- Dynamic typing animation for hero section
- Staggered reveal animations using AOS
- Particle system with mouse interaction
- Floating technology icons with CSS animations
- Progressive skill bar animations on scroll
- Micro-interactions on buttons and links

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

### Loading Optimizations
- Efficient CSS and JavaScript bundling
- Image lazy loading with Intersection Observer
- Debounced scroll event handlers
- Service Worker for caching and offline support
- Preload critical resources

### User Experience
- Sub-second loading times
- Smooth 60fps animations
- Keyboard navigation support
- Screen reader compatibility
- Progressive enhancement approach

## 🔧 Customization Guide

### Theme Customization
Update CSS custom properties in `assets/css/style.css`:

```css
:root {
    --primary-color: #2563eb;
    --accent-color: #3b82f6;
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Content Updates
Modify content in `index.html`:
- Personal information and bio
- Professional experience timeline
- Project showcase details
- Skills and proficiency levels
- Education and certifications
- Contact information

### Dark Theme
Customize dark theme variables:

```css
[data-theme="dark"] {
    --bg-primary: #111827;
    --text-primary: #f9fafb;
    --bg-card: #1f2937;
}
```

## 📧 Contact Integration

The portfolio includes multiple contact methods:
- **Email**: Direct mailto links
- **Phone**: Click-to-call functionality
- **Social Links**: LinkedIn, GitHub profiles
- **Contact Form**: Client-side validation with mailto integration

For production deployment, consider integrating:
- **EmailJS**: For client-side email sending
- **Netlify Forms**: For serverless form handling
- **Formspree**: For backend form processing
- **Custom API**: Node.js, Python, or PHP backend

## 🌐 Browser Compatibility

### Fully Supported
- **Chrome**: ✅ Version 90+
- **Firefox**: ✅ Version 88+
- **Safari**: ✅ Version 14+
- **Edge**: ✅ Version 90+

### Mobile Support
- **iOS Safari**: ✅ iOS 14+
- **Chrome Mobile**: ✅ Latest versions
- **Samsung Internet**: ✅ Latest versions

## 🚀 Deployment Options

### Static Hosting
- **Netlify**: Recommended for automatic deployments
- **Vercel**: Excellent for React/Next.js projects
- **GitHub Pages**: Free hosting for GitHub repositories
- **AWS S3**: Enterprise-grade static hosting

### Performance Tips
- Enable Gzip compression
- Set ## 👨‍💻 About Sreerag E G

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

*Last updated: September 2025*
