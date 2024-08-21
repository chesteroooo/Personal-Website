require('dotenv').config();
const express = require('express');
const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');
const cors = require('cors');  // Add this line

const app = express();
app.use(cors());  // Add this line to enable CORS
app.use(bodyParser.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;

    const msg = {
        to: 'chester0612yu@gmail.com', // Replace with your email
        from: email,
        subject: subject,
        text: message,
        html: `<p>${message}</p>`
    };

    sgMail.send(msg)
        .then(() => {
            res.status(202).send('Email sent successfully!');
        })
        .catch((error) => {
            console.error('Error:', error);
            res.status(500).send('Failed to send email.');
        });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
