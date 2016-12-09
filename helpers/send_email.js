/**
 * Created by gr on 2016/12/10.
 */

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: '126',
    auth: {
        user: 'guo1810@126.com',
        pass: 'qwert12345'
    }
});

var mailOptions = {
    from: 'guo1810@126.com>', // sender address
    to: '@163.com', // list of receivers
    cc: 'cc@163.com',
    bcc: 'bcc@126.com',
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ✔', // plaintext body
    html: '<b>Hello world ✔</b>' // html body

};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});
