var nodemailer = require('nodemailer');

const sendEmail = async (userEmail, token, id) => {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "mitanshidewatwal@gmail.com",
            pass: "fcfnntabajmdqpdj"
        }
    });
    //send out mail thriugh nodemailer
    var mailoptions = {
        from: "mitanshidewatwal@gmail.com",
        to: userEmail,
        subject: " password reset",
        html: `<p> you have request for password reset </p>
        <h5>click in this <a> href = "http://127.0.0.1:9000/reset/${id}${token}">link </a> to  reset password</h5>`
    }
   await transporter.sendMail(mailoptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log("email sent successfully");
        }
    });

}

module.exports = {sendEmail}

