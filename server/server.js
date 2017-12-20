const path = require('path');
const express = require('express'); // include the express library

const publicPath = path.join(__dirname, '../public');

// setting up for heroku use
const port = process.env.PORT || 3000;

// console.log(publicPath);
var app = express();  // part of basic server setup

// part of basic server setup
app.use(express.static(publicPath));

// part of basic server setup
app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});