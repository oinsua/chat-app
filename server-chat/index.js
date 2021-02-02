const { create } = require('domain');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const port = process.env.PORT || 4000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);
  
server.listen(port, () => console.log(`Server has started on port ${port}`));