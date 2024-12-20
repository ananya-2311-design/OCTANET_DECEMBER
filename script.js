
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: 'smooth'
      });
    });
  });
  
  
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert('Message sent successfully!');
    } else {
      alert('Please fill in all fields.');
    }
  });
  