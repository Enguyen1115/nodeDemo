var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
        user: 'cprg352DDD@gmail.com',
        pass: '()cprgABC352DDD!'
    }
});

var mailOption = {
    from: 'cprg352DDD@gmail.com',
    to: 'ali.moussa@sait.ca',
    subject: 'Test nodejs',
    text: 'We are enjoying learning nodejs'
};

transporter.sendMail(mailOption, function(err, info){
    if (err){
        console.log(err);
    }else {
        console.log('Email sent ' + info.response);
    }
});