var socket = io();    // this variable is critical to communicating with our servers

socket.on('connect', function() {
    console.log('Connected to server')

    socket.emit('createMessage', {
        from: 'Andrew',
        text: 'Yup, that works for me.'
    });
});

socket.on('disconnect', function() {
    console.log('Disconnected from server')
});

socket.on('newMessage', function (message) {
    console.log('newMessage', message);
});