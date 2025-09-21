// Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== LOADING SCREEN =====
    const loadingScreen = document.getElementById('loading-screen');
    
    function hideLoadingScreen() {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1500);
    }

    // Hide loading screen when page is fully loaded
    if (document.readyState === 'complete') {
        hideLoadingScreen();
    } else {
        window.addEventListener('load', hideLoadingScreen);
    }

    // ===== THEME TOGGLE =====
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);
    
    // Update theme toggle icon
    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }
    
    updateThemeIcon(currentTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    // ===== NAVIGATION =====
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle with body scroll prevention
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
    
    // Close mobile menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });

    // Navbar scroll effect
    function handleNavbarScroll() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleNavbarScroll);

    // ===== SMOOTH SCROLLING =====
    function smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            const offsetTop = element.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
    
    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            if (target.startsWith('#')) {
                smoothScroll(target);
            }
        });
    });
    
    // Handle back to top click
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ===== ACTIVE NAVIGATION HIGHLIGHT =====
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                // Remove active class from all nav links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current section link
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);

    // ===== TYPING ANIMATION =====
    function typeWriter(element, words, speed = 100, deleteSpeed = 50, delayBetween = 2000) {
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                element.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                element.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }
            
            let typeSpeed = isDeleting ? deleteSpeed : speed;
            
            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = delayBetween;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
            
            setTimeout(type, typeSpeed);
        }
        
        type();
    }
    
    // Initialize typing animation
    const typingElement = document.querySelector('.typing-animation');
    if (typingElement) {
        const words = ['Sreerag E G', 'Python Developer', 'Full-Stack Developer', 'Automation Expert'];
        typeWriter(typingElement, words);
    }

    // ===== SKILL BARS ANIMATION =====
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top < windowHeight && rect.bottom > 0) {
                bar.style.animation = 'none';
                bar.offsetHeight; // Trigger reflow
                bar.style.animation = 'skillLoad 2s ease-in-out';
            }
        });
    }
    
    window.addEventListener('scroll', animateSkillBars);

    // ===== CONTACT FORM =====
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            const submitButton = contactForm.querySelector('.form-submit');
            const originalText = submitButton.innerHTML;
            
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                // Create mailto link
                const mailtoLink = `mailto:sreerageg@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
                window.location.href = mailtoLink;
                
                showNotification('Thank you! Your message has been sent.', 'success');
                contactForm.reset();
                
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            }, 1000);
        });
    }
    
    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // ===== NOTIFICATION SYSTEM =====
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());
        
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${getNotificationIcon(type)}"></i>
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            backgroundColor: getNotificationColor(type),
            color: 'white',
            padding: '15px 20px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            zIndex: '10000',
            transform: 'translateX(400px)',
            transition: 'transform 0.3s ease-in-out',
            maxWidth: '400px'
        });
        
        notification.querySelector('.notification-content').style.cssText = `
            display: flex;
            align-items: center;
            gap: 10px;
        `;
        
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 18px;
            cursor: pointer;
            margin-left: auto;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Close functionality
        closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto close after 5 seconds
        setTimeout(() => {
            if (document.body.contains(notification)) {
                notification.style.transform = 'translateX(400px)';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }
    
    function getNotificationIcon(type) {
        const icons = {
            success: 'fa-check-circle',
            error: 'fa-exclamation-circle',
            warning: 'fa-exclamation-triangle',
            info: 'fa-info-circle'
        };
        return icons[type] || icons.info;
    }
    
    function getNotificationColor(type) {
        const colors = {
            success: '#10b981',
            error: '#ef4444',
            warning: '#f59e0b',
            info: '#3b82f6'
        };
        return colors[type] || colors.info;
    }

    // ===== FLOATING FORM LABELS =====
    function initFloatingLabels() {
        const formGroups = document.querySelectorAll('.form-group');
        
        formGroups.forEach(group => {
            const input = group.querySelector('input, textarea');
            const label = group.querySelector('label');
            
            if (input && label) {
                // Check if input has value on page load
                function checkInput() {
                    if (input.value.length > 0) {
                        label.style.transform = 'translateY(-20px)';
                        label.style.fontSize = '0.875rem';
                        label.style.color = 'var(--accent-color)';
                        label.style.background = 'var(--bg-card)';
                        label.style.padding = '0 8px';
                    } else if (document.activeElement !== input) {
                        label.style.transform = 'translateY(0)';
                        label.style.fontSize = '1rem';
                        label.style.color = 'var(--text-light)';
                        label.style.background = 'transparent';
                        label.style.padding = '0';
                    }
                }
                
                input.addEventListener('focus', () => {
                    label.style.transform = 'translateY(-20px)';
                    label.style.fontSize = '0.875rem';
                    label.style.color = 'var(--accent-color)';
                    label.style.background = 'var(--bg-card)';
                    label.style.padding = '0 8px';
                });
                
                input.addEventListener('blur', checkInput);
                input.addEventListener('input', checkInput);
                
                // Initial check
                checkInput();
            }
        });
    }
    
    initFloatingLabels();

    // ===== STATS COUNTER ANIMATION =====
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const rect = counter.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top < windowHeight && rect.bottom > 0 && !counter.classList.contains('animated')) {
                counter.classList.add('animated');
                
                const target = parseInt(counter.textContent.replace(/\D/g, ''));
                const suffix = counter.textContent.replace(/\d/g, '');
                let current = 0;
                const increment = target / 100;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.textContent = target + suffix;
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(current) + suffix;
                    }
                }, 20);
            }
        });
    }
    
    window.addEventListener('scroll', animateCounters);

    // ===== PARALLAX EFFECT =====
    function initParallax() {
        const parallaxElements = document.querySelectorAll('.hero-particles, .floating-icon');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            parallaxElements.forEach(element => {
                if (element.classList.contains('hero-particles')) {
                    element.style.transform = `translateY(${rate}px)`;
                } else if (element.classList.contains('floating-icon')) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        element.style.transform += ` translateY(${scrolled * 0.1}px)`;
                    }
                }
            });
        });
    }
    
    initParallax();

    // ===== INITIALIZE AOS (Animate On Scroll) =====
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            offset: 100,
            delay: 0
        });
    }

    // ===== KEYBOARD NAVIGATION =====
    document.addEventListener('keydown', function(e) {
        // ESC key to close mobile menu
        if (e.key === 'Escape') {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
        
        // Enter/Space on theme toggle
        if ((e.key === 'Enter' || e.key === ' ') && document.activeElement === themeToggle) {
            e.preventDefault();
            themeToggle.click();
        }
    });

    // ===== PERFORMANCE OPTIMIZATIONS =====
    
    // Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply debounce to scroll handlers
    const debouncedNavbarScroll = debounce(handleNavbarScroll, 10);
    const debouncedActiveNavLink = debounce(updateActiveNavLink, 10);
    const debouncedSkillBars = debounce(animateSkillBars, 100);
    const debouncedCounters = debounce(animateCounters, 100);
    
    window.removeEventListener('scroll', handleNavbarScroll);
    window.removeEventListener('scroll', updateActiveNavLink);
    window.removeEventListener('scroll', animateSkillBars);
    window.removeEventListener('scroll', animateCounters);
    
    window.addEventListener('scroll', debouncedNavbarScroll);
    window.addEventListener('scroll', debouncedActiveNavLink);
    window.addEventListener('scroll', debouncedSkillBars);
    window.addEventListener('scroll', debouncedCounters);

    // ===== LAZY LOADING FOR IMAGES =====
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ===== CONSOLE EASTER EGG =====
    console.log(`
    🚀 Welcome to Sreerag E G's Portfolio!
    
    Built with:
    • HTML5 & CSS3
    • Vanilla JavaScript
    • AOS Animation Library
    • Font Awesome Icons
    • Google Fonts
    
    Designed with ❤️ for optimal performance and accessibility.
    
    Contact: sreerageg@gmail.com
    LinkedIn: https://linkedin.com/in/sreerag-e-g
    GitHub: https://github.com/sreerageg
    `);

    // ===== INITIAL CALLS =====
    handleNavbarScroll();
    updateActiveNavLink();
    animateSkillBars();
    animateCounters();
    
    // Remove loading class after everything is initialized
    document.body.classList.remove('loading');
    
});

// ===== SERVICE WORKER REGISTRATION =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// ===== PREVENT ZOOM ON MOBILE =====
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});

// ===== CONTEXT MENU CUSTOMIZATION =====
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    showNotification('Right-click disabled for portfolio protection', 'info');
});

// ===== COPY PROTECTION =====
document.addEventListener('keydown', function(e) {
    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (e.keyCode === 123 || 
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) || 
        (e.ctrlKey && e.shiftKey && e.keyCode === 74) || 
        (e.ctrlKey && e.keyCode === 85)) {
        e.preventDefault();
        showNotification('Developer tools disabled', 'warning');
        return false;
    }
});

// ===== GLOBAL ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('Portfolio Error:', e.error);
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled Promise Rejection:', e.reason);
});

// ===== MODERN SECTION ANIMATION ON SCROLL =====
function animateSectionsOnScroll() {
    const animatedEls = document.querySelectorAll(
        '.section-header, .about-card, .feature-card, .timeline-item, .project-card, .cert-item, .contact-card, .contact-form-container'
    );
    animatedEls.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
            el.classList.add('aos-animate');
        }
    });
}
window.addEventListener('scroll', animateSectionsOnScroll);
window.addEventListener('DOMContentLoaded', animateSectionsOnScroll);
