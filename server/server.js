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

  // socket.emit from Admin, text Welcome to the chat app
  socket.emit('newMessage', {
    from: 'Admin',
    text: 'Welcome to the chat app',
    createdAt: new Date().getTime()
  });

  // socket.broadcast.emit from Admin text New user joined
  socket.broadcast.emit('newMessage', {
    from: 'Admin',
    text: 'New user joined',
    createdAt: new Date().getTime()
  });

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });

    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // });
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected from server')
  });
});

// part of basic server setup
server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});