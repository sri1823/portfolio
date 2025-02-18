// AOS (Animate on Scroll) initialization
AOS.init();

// Smooth scrolling when clicking on navbar links
document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate progress bars when scrolled into view
window.addEventListener('scroll', () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        if (isInViewport(bar)) {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = `${progress}%`;
        }
    });
});

// Function to check if element is in viewport
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

// Dark/Light Theme Toggle with Local Storage
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check for stored theme preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggleBtn.textContent = '☀️'; // Light mode icon
} else {
    body.classList.remove('dark-mode');
    themeToggleBtn.textContent = '🌙'; // Dark mode icon
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️';  // Change to Light mode icon
        localStorage.setItem('theme', 'dark'); // Save theme preference
    } else {
        themeToggleBtn.textContent = '🌙';  // Change to Dark mode icon
        localStorage.setItem('theme', 'light'); // Save theme preference
    }
});

// Contact form validation with email format checking
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = contactForm.querySelector('input[type="text"]');
    const email = contactForm.querySelector('input[type="email"]');
    const message = contactForm.querySelector('textarea');

    // Basic validation
    if (name.value === '' || email.value === '' || message.value === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Email format validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulate message sent
    alert('Message sent successfully!');
    contactForm.reset();
});

// Animate progress bars as user scrolls
document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = '0%';  // Start with 0 width
    });
});
