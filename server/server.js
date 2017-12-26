const path = require('path');
const http = require('http');
const express = require('express'); // include the express library
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');

// setting up for heroku use
const port = process.env.PORT || 3000;

// console.log(publicPath);
var app = express();  // part of basic server setup
var server = http.createServer(app);
var io = socketIO(server);

// part of basic server setup
app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnect', () => {
    console.log('Client disconnected from server')
  });
});

// part of basic server setup
server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});