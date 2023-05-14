const express = require('express');
const socketIo = require('socket.io');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('api works!');
});

const server = app.listen(port, () => {
    console.log('app is running in port ' + port);
});


const io = socketIo(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

io.on('connection', socket => {
    io.emit('Se conecto alguien');
    console.log('Se conectó alguien!');

    socket.on('sendMessage', (data) => {
        console.log('Llego un mensaje: ' + data);
        socket.broadcast.emit('newMessage', {
            ...data,
            date: new Date().getTime()
        });
    })
});

