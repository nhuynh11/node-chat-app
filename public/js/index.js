var socket = io();    // this variable is critical to communicating with our servers

socket.on('connect', function() {
    console.log('Connected to server')

    socket.emit('createEmail', {
        to: 'steph@example.com',
        text: 'Hey, this is Steph.',
    });
});

socket.on('disconnect', function() {
    console.log('Disconnected from server')
});

socket.on('newEmail', function(email) {
    console.log('New email', email);
});