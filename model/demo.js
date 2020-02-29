var email = require("emailjs/email");
var demo = {

   sendMail: function (demo, callback) {

      var server = email.server.connect({
         user: 'wonderbooksnstationers@gmail.com',
         password: 'wonderbooks',
         host: "smtp.gmail.com",
         ssl: true,
         port: 465
      });


      server.send({
         text: demo.message,
         from: 'wonderbooksnstationers@gmail.com',
         to: demo.name,
         subject: demo.subject
      }, callback);
   }


}
module.exports = demo;
