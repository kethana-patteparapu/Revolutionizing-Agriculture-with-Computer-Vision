// Simple contact form submission with validation & alert
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }

      if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      alert('Thank you for contacting us, ' + name + '! We will get back to you soon.');
      contactForm.reset();
    });
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
