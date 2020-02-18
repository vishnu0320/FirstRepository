const express = require("express");
const router = express.Router();
const api= require('./api')

router.get("/", (req, res) => {
  res.sendFile("/home/com20/Documents/jsnodeDemo/sendGrid/index.html");
});

router.post("/sendEmail", (req, res) => {
  console.log("email is ",req.body.email)
  api.sendMail(req.body.email,req.body.name);
  res.send("check you email to verify account");
});

module.exports = router;
