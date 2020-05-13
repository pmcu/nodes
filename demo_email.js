var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pmcumm@gmail.com',
    pass: 'eadaoin1'
  }
});
var html = `<h1>Caint</h1><p>Seo ceann eile taobh istigh d'athróg
agus ba cheart go mbeadh sé deas agus
le feiceáil.</p>
`;
var mailOptions = {
  from: 'pmcumm@gmail.com',
  to: 'p.macconuladh@ria.ie',
  subject: 'tástáil teachtaireacht',
  html: html
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
