// Particle System for Portfolio Hero Section
class ParticleSystem {
    constructor(container) {
        this.container = container;
        this.particles = [];
        this.maxParticles = 50;
        this.canvas = null;
        this.ctx = null;
        this.animationId = null;
        
        this.init();
    }
    
    init() {
        this.createCanvas();
        this.createParticles();
        this.animate();
        this.handleResize();
    }
    
    createCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '1';
        
        this.ctx = this.canvas.getContext('2d');
        this.container.appendChild(this.canvas);
        
        this.resizeCanvas();
    }
    
    resizeCanvas() {
        const rect = this.container.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
    }
    
    createParticles() {
        for (let i = 0; i < this.maxParticles; i++) {
            this.particles.push(this.createParticle());
        }
    }
    
    createParticle() {
        return {
            x: Math.random() * this.canvas.width,
            y: Math.random() * this.canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.1,
            color: this.getRandomColor(),
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: 0.02 + Math.random() * 0.02
        };
    }
    
    getRandomColor() {
        const colors = [
            'rgba(59, 130, 246, ',  // Blue
            'rgba(147, 51, 234, ',  // Purple  
            'rgba(16, 185, 129, ',  // Green
            'rgba(245, 158, 11, ',  // Yellow
            'rgba(239, 68, 68, '    // Red
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    updateParticle(particle) {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Update pulse
        particle.pulse += particle.pulseSpeed;
        
        // Wrap around edges
        if (particle.x < -10) particle.x = this.canvas.width + 10;
        if (particle.x > this.canvas.width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = this.canvas.height + 10;
        if (particle.y > this.canvas.height + 10) particle.y = -10;
        
        // Add slight drift towards center for more natural movement
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        const dx = centerX - particle.x;
        const dy = centerY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > this.canvas.width * 0.4) {
            particle.vx += (dx / distance) * 0.001;
            particle.vy += (dy / distance) * 0.001;
        }
        
        // Limit velocity
        const maxVel = 1;
        if (Math.abs(particle.vx) > maxVel) particle.vx = particle.vx > 0 ? maxVel : -maxVel;
        if (Math.abs(particle.vy) > maxVel) particle.vy = particle.vy > 0 ? maxVel : -maxVel;
    }
    
    drawParticle(particle) {
        const pulseRadius = particle.radius + Math.sin(particle.pulse) * 0.5;
        const pulseOpacity = particle.opacity + Math.sin(particle.pulse) * 0.1;
        
        this.ctx.save();
        this.ctx.globalAlpha = Math.max(0, pulseOpacity);
        this.ctx.fillStyle = particle.color + this.ctx.globalAlpha + ')';
        
        // Create gradient for glow effect
        const gradient = this.ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, pulseRadius * 3
        );
        gradient.addColorStop(0, particle.color + this.ctx.globalAlpha + ')');
        gradient.addColorStop(1, particle.color + '0)');
        
        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, pulseRadius * 3, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Draw core particle
        this.ctx.fillStyle = particle.color + (this.ctx.globalAlpha * 0.8) + ')';
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, pulseRadius, 0, Math.PI * 2);
        this.ctx.fill();
        
        this.ctx.restore();
    }
    
    drawConnections() {
        const maxDistance = 150;
        
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const particle1 = this.particles[i];
                const particle2 = this.particles[j];
                
                const dx = particle1.x - particle2.x;
                const dy = particle1.y - particle2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < maxDistance) {
                    const opacity = (1 - distance / maxDistance) * 0.1;
                    
                    this.ctx.save();
                    this.ctx.globalAlpha = opacity;
                    this.ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(particle1.x, particle1.y);
                    this.ctx.lineTo(particle2.x, particle2.y);
                    this.ctx.stroke();
                    this.ctx.restore();
                }
            }
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw particles
        this.particles.forEach(particle => {
            this.updateParticle(particle);
            this.drawParticle(particle);
        });
        
        // Draw connections between nearby particles
        this.drawConnections();
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    handleResize() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
            // Redistribute particles for new canvas size
            this.particles.forEach(particle => {
                if (particle.x > this.canvas.width) particle.x = this.canvas.width * Math.random();
                if (particle.y > this.canvas.height) particle.y = this.canvas.height * Math.random();
            });
        });
    }
    
    addMouseInteraction() {
        let mouseX = 0;
        let mouseY = 0;
        let isMouseOver = false;

        this.container.addEventListener('mousemove', (e) => {
            const rect = this.container.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
            isMouseOver = true;

            // Attract particles to mouse and change color
            this.particles.forEach(particle => {
                const dx = mouseX - particle.x;
                const dy = mouseY - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    const force = (100 - distance) / 100;
                    particle.vx += (dx / distance) * force * 0.01;
                    particle.vy += (dy / distance) * force * 0.01;
                    // Modern effect: change color on hover
                    particle.color = 'rgba(59, 130, 246, ';
                }
            });
        });
        
        this.container.addEventListener('mouseleave', () => {
            isMouseOver = false;
        });
        
        // Create particles at mouse position occasionally
        this.container.addEventListener('click', (e) => {
            const rect = this.container.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            
            // Create burst of particles at click location
            for (let i = 0; i < 5; i++) {
                const angle = (Math.PI * 2 / 5) * i;
                const speed = 2;
                const newParticle = this.createParticle();
                newParticle.x = clickX;
                newParticle.y = clickY;
                newParticle.vx = Math.cos(angle) * speed;
                newParticle.vy = Math.sin(angle) * speed;
                newParticle.radius = 3;
                newParticle.opacity = 0.8;
                
                if (this.particles.length < this.maxParticles + 10) {
                    this.particles.push(newParticle);
                }
            }
            
            // Remove excess particles after a delay
            setTimeout(() => {
                if (this.particles.length > this.maxParticles) {
                    this.particles.splice(this.maxParticles);
                }
            }, 3000);
        });
    }
    
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.canvas) {
            this.container.removeChild(this.canvas);
        }
    }
}

// Initialize particles when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const heroParticlesContainer = document.querySelector('.hero-particles');
    
    if (heroParticlesContainer) {
        const particleSystem = new ParticleSystem(heroParticlesContainer);
        particleSystem.addMouseInteraction();
        
        // Cleanup on page unload
        window.addEventListener('beforeunload', () => {
            particleSystem.destroy();
        });
        
        // Pause/resume animation based on visibility
        let isVisible = true;
        
        document.addEventListener('visibilitychange', () => {
            if (document.hidden && isVisible) {
                particleSystem.destroy();
                isVisible = false;
            } else if (!document.hidden && !isVisible) {
                // Reinitialize if page becomes visible again
                setTimeout(() => {
                    const newParticleSystem = new ParticleSystem(heroParticlesContainer);
                    newParticleSystem.addMouseInteraction();
                }, 100);
                isVisible = true;
            }
        });
    }
});

// Advanced particle effects for different sections
class FloatingElements {
    constructor() {
        this.elements = [];
        this.init();
    }
    
    init() {
        this.createFloatingIcons();
        this.startAnimation();
    }
    
    createFloatingIcons() {
        const container = document.querySelector('.floating-elements');
        if (!container) return;
        
        const icons = ['fas fa-calculator', 'fas fa-chart-line', 'fas fa-file-invoice-dollar', 'fas fa-coins', 'fas fa-receipt'];
        
        icons.forEach((iconClass, index) => {
            const element = document.createElement('div');
            element.className = 'floating-icon dynamic';
            element.innerHTML = `<i class="${iconClass}"></i>`;
            
            // Position randomly
            element.style.cssText = `
                position: absolute;
                width: 40px;
                height: 40px;
                background: var(--bg-card);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--accent-color);
                font-size: 16px;
                box-shadow: var(--shadow-lg);
                opacity: 0.7;
                animation: float ${3 + Math.random() * 2}s ease-in-out infinite;
                animation-delay: ${index * 0.5}s;
                top: ${20 + Math.random() * 60}%;
                left: ${10 + Math.random() * 80}%;
                z-index: 1;
            `;
            
            container.appendChild(element);
            this.elements.push(element);
        });
    }
    
    startAnimation() {
        // Add additional floating animation
        this.elements.forEach((element, index) => {
            setInterval(() => {
                const currentTop = parseInt(element.style.top);
                const currentLeft = parseInt(element.style.left);
                
                const newTop = Math.max(10, Math.min(80, currentTop + (Math.random() - 0.5) * 10));
                const newLeft = Math.max(5, Math.min(90, currentLeft + (Math.random() - 0.5) * 10));
                
                element.style.transition = 'top 3s ease-in-out, left 3s ease-in-out';
                element.style.top = newTop + '%';
                element.style.left = newLeft + '%';
            }, 4000 + index * 1000);
        });
    }
}

// Initialize floating elements
document.addEventListener('DOMContentLoaded', function() {
    new FloatingElements();
});

// Scroll-based particle effects
class ScrollParticles {
    constructor() {
        this.particles = [];
        this.init();
    }
    
    init() {
        this.createScrollListener();
    }
    
    createScrollListener() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.updateParticlesOnScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }
    
    updateParticlesOnScroll() {
        const scrollPercent = window.pageYOffset / (document.body.scrollHeight - window.innerHeight);
        const particles = document.querySelectorAll('.floating-icon');
        
        particles.forEach((particle, index) => {
            const speed = (index + 1) * 0.1;
            const yOffset = scrollPercent * speed * 100;
            particle.style.transform = `translateY(${yOffset}px) rotate(${scrollPercent * 360}deg)`;
        });
    }
}

// Initialize scroll particles
document.addEventListener('DOMContentLoaded', function() {
    new ScrollParticles();
});

// Performance monitoring for particle systems
class PerformanceMonitor {
    constructor() {
        this.fps = 0;
        this.lastTime = performance.now();
        this.frameCount = 0;
        this.init();
    }
    
    init() {
        this.monitor();
    }
    
    monitor() {
        const currentTime = performance.now();
        this.frameCount++;
        
        if (currentTime >= this.lastTime + 1000) {
            this.fps = Math.round((this.frameCount * 1000) / (currentTime - this.lastTime));
            this.frameCount = 0;
            this.lastTime = currentTime;
            
            // Reduce particle count if FPS is too low
            if (this.fps < 30) {
                this.optimizePerformance();
            }
        }
        
        requestAnimationFrame(() => this.monitor());
    }
    
    optimizePerformance() {
        // Reduce particle effects if performance is poor
        const heroParticles = document.querySelector('.hero-particles canvas');
        if (heroParticles) {
            heroParticles.style.opacity = '0.5';
        }
        
        // Reduce floating elements
        const floatingElements = document.querySelectorAll('.floating-icon.dynamic');
        floatingElements.forEach((element, index) => {
            if (index > 2) {
                element.style.display = 'none';
            }
        });
    }
}

// Initialize performance monitoring
document.addEventListener('DOMContentLoaded', function() {
    if (window.performance) {
        new PerformanceMonitor();
    }
});
