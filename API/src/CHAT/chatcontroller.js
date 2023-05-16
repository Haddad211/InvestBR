const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const Chat = require('./chatModel');

// Set up the Express app and the HTTP server
const app = express();
const server = http.createServer(app);

// Set up the Socket.IO server
const io = socketIO(server);

// Listen for Socket.IO connections
io.on('connection', (socket) => {
  console.log(`Socket ${socket.id} connected`);

  // Handle the "send message" event
  socket.on('send message', async ({ sender, receiver, message }) => {
    try {
      // Find or create a chat between the sender and receiver
      const chat = await Chat.findOneAndUpdate(
        { participants: { $all: [sender, receiver] } },
        { $push: { messages: { sender, body: message } } },
        { upsert: true, new: true }
      ).populate('messages.sender', 'name');

      // Emit the chat to the sender and receiver
      socket.emit(`chat message:${sender}:${receiver}`, chat);
      socket.to(receiver).emit(`chat message:${receiver}:${sender}`, chat);
    } catch (error) {
      console.error(error);
    }
  });

  // Handle the "disconnect" event
  socket.on('disconnect', () => {
    console.log(`Socket ${socket.id} disconnected`);
  });
});

// Start the server
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
