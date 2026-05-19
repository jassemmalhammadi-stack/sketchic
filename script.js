document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
            navbar.style.borderBottom = '1px solid rgba(0, 229, 255, 0.2)';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
        }
    });

    // Fade-in on scroll animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply animation starting styles to elements
    const animateElements = document.querySelectorAll('.char-card, .timeline-item, .section-header');
    animateElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Create floating ink elements in hero
    const floatingContainer = document.querySelector('.floating-sketch-elements');
    const colors = ['#00e5ff', '#b500ff', '#ffffff'];
    
    for (let i = 0; i < 15; i++) {
        const el = document.createElement('div');
        el.style.position = 'absolute';
        el.style.width = Math.random() * 4 + 1 + 'px';
        el.style.height = el.style.width;
        el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        el.style.borderRadius = '50%';
        el.style.opacity = Math.random() * 0.5 + 0.2;
        el.style.left = Math.random() * 100 + '%';
        el.style.top = Math.random() * 100 + '%';
        el.style.animation = `float ${Math.random() * 3 + 2}s infinite alternate ease-in-out`;
        el.style.animationDelay = `${Math.random() * 2}s`;
        
        floatingContainer.appendChild(el);
    }
});

// Add keyframes for float via JS to avoid cluttering CSS
const style = document.createElement('style');
style.innerHTML = `
    @keyframes float {
        0% { transform: translateY(0) scale(1); }
        100% { transform: translateY(-20px) scale(1.5); }
    }
`;
document.head.appendChild(style);
