const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// 1. Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// 2. Handle WebSocket Connections
io.on('connection', (socket) => {
    console.log('User connected: ' + socket.id);

    // FEATURE A: Code Synchronization
    // When a user types code, send it to everyone ELSE
    socket.on('code-change', (code) => {
        socket.broadcast.emit('code-update', code);
    });

    // FEATURE B: Chat Messages
    // When a user sends a msg, send it to EVERYONE (including sender)
    socket.on('chat-message', (msg) => {
        io.emit('chat-message', msg);
    });

    // Handle Disconnect
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// 3. Start the Server (Fixing the Error)
// Render uses process.env.PORT. Localhost uses 3000.
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});