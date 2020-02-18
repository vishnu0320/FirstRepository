const express = require("express");
const app = express();
var bodyParser = require('body-parser')
const router = require("./router");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/',router);

app.listen(3003, () => {
  console.log("server is running at http://localhost:3003");
});
