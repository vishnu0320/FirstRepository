const MailGen = require('mailgen')
const sgMail = require('@sendgrid/mail')
const apimail = require("./mail");
const keys= require('./keys')
 
module.exports={
     sendMail : (userEmail,userName) => {
        try {  
            const msg = {
                from: 'demoApp@daffodilsw.com',
                to:  userEmail,
                subject: 'Test verification email',
                html: apimail.mail(userName),
                }   
          sgMail.setApiKey(keys.sendgrid.keys)
          sgMail.send(msg)
        } catch (error) {
          throw new Error(error.message)
        }
      }
}