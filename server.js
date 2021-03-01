const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});
const dotenv = require('dotenv');
dotenv.config({ path: 'config.env' });

io.on('connection', (socket) => {
  // Join room
  const { roomId } = socket.handshake.query;
  socket.join(roomId);

  // Listen for new messages
  socket.on('message', (data) => {
    io.in(roomId).emit('message', data);
  });

  // Leave the room if the user closes the socket
  socket.on('disconnect', () => {
    socket.leave(roomId);
  });
});

const port = process.env.port || 5000;
server.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
