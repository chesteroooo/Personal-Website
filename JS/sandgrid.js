document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('input-name').value;
    const email = document.getElementById('input-email').value;
    const subject = document.getElementById('input-subject').value;
    const message = document.getElementById('input-message').value;

    const data = { name, email, subject, message };

    fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(response => response.text())
        .then(result => alert(result))
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to send email.');
        });

    document.getElementById('contact-form').reset();
});
