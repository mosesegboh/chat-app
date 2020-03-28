//require necessary packages
const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const router = require ('./router');



const app = express();
//initialize the server
const server = http.createServer(app);
//an instance of the socket io
const io = socketio(server);

//this lets us know when there is a new connection in our sockets in the backend
io.on('connection', (socket) => {
    console.log('we have a new connection');

    socket.on('join', () => {
        
    })

    //for the socket above that just joined
    socket.on('disconnect', () => {
        console.log('user has left');
    })
});

app.use(router);



//get our server running
server.listen(PORT, () => console.log('Server has started running on port ${PORT}'));

