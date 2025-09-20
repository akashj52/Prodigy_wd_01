// Smooth scroll to sections
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Sticky Navbar color change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if(window.scrollY > 50) {
        navbar.style.background = '#222';
    } else {
        navbar.style.background = '#111';
    }
});

// Simple form submission alert
document.getElementById('contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    this.reset();
});
