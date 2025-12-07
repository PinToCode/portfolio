document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
        });
    });

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        // Add a class to handle initial state in CSS if needed, 
        // or just rely on the CSS animation classes being added
        section.classList.add('fade-in-section'); 
        observer.observe(section);
    });

    // Glitch Text Effect (Simple random character swap on hover for the name)
    const nameElement = document.querySelector('.glitch-text');
    const originalText = nameElement.getAttribute('data-text');
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    nameElement.addEventListener('mouseover', event => {
        let iteration = 0;
        
        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if(index < iteration) {
                        return originalText[index];
                    }
                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("");
            
            if(iteration >= originalText.length){ 
                clearInterval(interval);
            }
            
            iteration += 1 / 3;
        }, 30);
    });
});
