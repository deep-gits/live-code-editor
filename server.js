const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('User connected: ' + socket.id);

    // 1. Handle Code Changes
    socket.on('code-change', (code) => {
        socket.broadcast.emit('code-update', code);
    });

    // 2. Handle Chat Messages (NEW)
    socket.on('chat-message', (msg) => {
        // Send the message to EVERYONE (including the sender)
        io.emit('chat-message', msg);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});