const { create } = require('domain');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const port = process.env.PORT || 4000; //Se define el puerto a traves del cual se brinda el servicio
const router = require('./route/router'); //Se importan las rutas


const app = express(); //Crea el objeto app a traves de express
const server = http.createServer(app); //Crear un server a traves de http para establecer la coneccion websocket
const io = socketio(server,{
    cors:{
        origin: '*',
    }
}); //Establecer la conexion en tiempo real a traves de socketio con el server

require('./socket/socketio')(io);

app.use(router); //Se inician las rutas.

server.listen(port, () => console.log(`Server has started on port ${port}`));