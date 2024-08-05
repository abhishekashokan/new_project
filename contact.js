document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const responseDiv = document.getElementById('response');

    responseDiv.textContent = `Thank you for reaching out, ${name}! We will respond to your message sent to ${email} shortly.`;
    this.reset();
});
