require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.static("views/static"))
app.set('view engine', 'ejs');

module.exports = app;
