# Node.js Send-Mail Project

I developed a mailing project using nodemailer.

## Installation

npm install nodemailer

## Usage

```node.js
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
  from: 'Your mail',
  to: '',
  cc:'',
  bcc:'In the e-mails you add here, people receive the same e-mail without seeing each other..',
  subject:'Lovely ASY ',
  html: '<h1> Subject </h1>'
}

transporter.sendMail(mailOptions,(err,data)=>{
  if(err) console.log(err)
  else console.log('mail sended');
})
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
