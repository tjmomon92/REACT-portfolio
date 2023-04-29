const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');

// server to send sent emails
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(5000, () => console.log('Server Running'));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

// Add in later
const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'myEmail',
        pass: 'myPassword'
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Ready to Send');
    }
});

router.post('/contact', (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: 'myEmail',
        subject: 'Portfolio Contact Form Submission',
        html:   `<p>Name: ${name}</p>
                 <p>Email: ${email}</p>
                 <p>Phone: ${phone}</p>
                 <p>Message: ${message}</p>`,
    };
})