const express = require("express");
const app = express();

const parser = require('body-parser')

app.use = require('./routes/index')

app.use(cors())
app.use(parser.urlencoded({extended: true}))   
app.use(parser.json()) 

app.listen(4000, () => {
  console.log("app listening on port 4000");
});