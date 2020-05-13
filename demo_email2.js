var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pmcumm@gmail.com',
    pass: 'eadaoin1'
  }
});

var mailOptions = {
  from: 'pmcumm@gmail.com',
  to: 'p.macconuladh@ria.ie',
  subject: 'tástáil html tábla ',
  html:'<h3>Tuairisc Bheag</h3><p>07-02-2020</p> <table style="width:70%;border:1px solid black;"> <tr> <th style="text-align:left;">Oibrí</th> <th style="text-align:left;">Nod</th> <th style="text-align:left;">Teideal</th> </tr> <tr> <td>Niall</td> <td>NL092</td> <td>Úrchúrsa Gaeilge</td> </tr> <tr> <td>Caroline</td> <td>NL233</td> <td>Ó Ros Muc go Rostov</td> </tr> <tr> <td>Pádraig</td> <td>NL898</td> <td>Go Meiriceá Siar</td> </tr> </table><hr><p>Seo thuas, a Charley eolas ar na téacsanna atá á ndigitiú ag an foireann i láthair na huaire. Tá mé féin agus Caroline ag obair ar an liosta úr anois. Tá roinnt leabhar as an liosta úr déanta ag Niall cheana féin. Gheobhaidh tú eolas orthu Dé Luain.</p><br><p>le meas </p><p>Pádraig</p>' };

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
