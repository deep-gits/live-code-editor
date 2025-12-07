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
    // 1. Join Room (New)
    socket.on('join-room', (roomId) => {
        socket.join(roomId);
        console.log(`User ${socket.id} joined room: ${roomId}`);
    });

    // 2. Code Change (Room specific)
    socket.on('code-change', ({ roomId, code }) => {
        // Send to everyone in the room EXCEPT sender
        socket.to(roomId).emit('code-update', code);
    });

    // 3. Chat Message (Room specific)
    socket.on('chat-message', ({ roomId, msg, sender }) => {
        // Send to EVERYONE in the room (including sender)
        io.to(roomId).emit('chat-message', { msg, sender });
    });

    // 4. Language Change (New)
    socket.on('language-change', ({ roomId, language }) => {
        // Sync language across all users
        io.to(roomId).emit('language-update', language);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});