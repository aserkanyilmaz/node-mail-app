const nodemailer = require ('nodemailer')

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sekoylmz14@gmail.com',  
    pass: 'mkkzvdmcfodueymk' //random password
  }
})
/*
nodemailer paketini kullanarak mail atma uygulaması.
*/

let mailOptions = {
  from: 'kendi mailiniz',
  to: 'gönderilecek kişinin maili',
  cc:'başka birini bilgilendirmek için buraya mail yazabilirsiniz.'
  bcc:'buraya eklediğiniz maillerde kişiler birbirlerini görmeden aynı maili alır.',
  subject:'Sevgilerle ASY ',
  html: '<h1> Nur kim ya :D </h1>'
}

transporter.sendMail(mailOptions,(err,data)=>{
  if(err) console.log(err)
  else console.log('mail gönderildi');
})
