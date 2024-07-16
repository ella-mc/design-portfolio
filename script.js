const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', function() {
    const emailContainer = document.getElementById('emailContainer');
    const emailAddress = document.getElementById('emailAddress');

    emailContainer.addEventListener('click', function() {
        navigator.clipboard.writeText(emailAddress.textContent).then(() => {
            emailContainer.classList.add('copied');
            setTimeout(() => {
                emailContainer.classList.remove('copied');
            }, 1500);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });
});
  
  