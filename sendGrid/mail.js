const MailGen = require('mailgen')
const sgMail = require('@sendgrid/mail')
const keys= require('./keys')


const mailGenerator = new MailGen({
  theme: 'salted',
  product: {
    name: 'Demo App',
    link: 'http://192.168.100.196:3003',
  },
})
module.exports = {
  mail:(userName)=>{
    
    const email = {
      body: {
        name: userName,
        intro: 'Welcome to email verification',
        action: {
          instructions: 'Please click the button below to verify your account',
          button: {
            color: '#33b5e5',
            text: 'Verify account',
            link: 'http://192.168.100.196:3003',
          },
        },
      },
    }
    const emailTemplate = mailGenerator.generate(email)
    return emailTemplate
 
}}


// module.exports = emailTemplate
