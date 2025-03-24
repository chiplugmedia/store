// Pause animation on hover
document.querySelector('.scroll-container').addEventListener('mouseenter', function() {
    document.querySelector('.scroll-content').style.animationPlayState = 'paused';
});

document.querySelector('.scroll-container').addEventListener('mouseleave', function() {
    document.querySelector('.scroll-content').style.animationPlayState = 'running';
});

// Intersection Observer for animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'scroll 40s linear infinite';
        } else {
            entry.target.style.animation = 'none';
        }
    });
}, { threshold: 0.1 });

observer.observe(document.querySelector('.scroll-content'));

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navIcons = document.querySelector('.nav-icons');

    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navIcons.style.display = navIcons.style.display === 'flex' ? 'none' : 'flex';
        hamburger.classList.toggle('active');
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.product-card, .about-content, .footer-section').forEach((el) => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value;
        if (email) {
            alert('Thank you for subscribing!');
            newsletterForm.reset();
        }
    });
});