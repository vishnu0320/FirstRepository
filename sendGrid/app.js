const sendgrid = require('@sendgrid/mail')
const keys= require('./keys')
sendgrid.setApiKey(keys.sendgrid.keys)

const msg={
    to:'nancy@daffodilsw.com',
    from:'vishnu.gupta@daffodilsw.com',
    subject:'testing send grid npm',
    text:'sdhgfvjkghvkhvbcjghbkjfgcfxhyfdhfh'
}

sendgrid.send(msg);