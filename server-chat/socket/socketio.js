const {addUser, removeUser, getUser, getUserInRoom} = require('../users/user');

module.exports = (io) => {

    io.on('connection', (socket) => {
       console.log('We have a new connection!!!');

       socket.on('join', ({username, room}, cb) => {
         //Verificar que el usuario existe
         const {error, user} = addUser({id: socket.id, username, room});
         error ? console.log('error', error) : console.log('user', user.username, user.room);
         
         if(error) return cb({error});
         socket.join(user.room); //Agrega el usuario a la sala
         cb(); 
       }); 
        
       socket.on('loading', ({username, room}, cb) => {
        const user = getUser(username);
        if(!user) cb({error: 'User undefined'})
        socket.emit('message', {user: 'admin', text:`${username}, welcome to the room ${room}`}); //Se emite un mensaje de bienvenida solo para le usuario
        socket.broadcast.to(room).emit('message', {user: 'admin', text: `${username}, has joined!!!`}) //Se emite un sms para todos los usuarios de la sala
        cb();    
    })
 
       socket.on('send_message', (message, cb) => {
           const {user, text} = message;
         //Recuperar el usuario que emite el mensaje
           const resUser = getUser(user);
           if(!resUser) cb({error: 'User undefined'})
     
           io.to(resUser.room).emit('message', {user: user, text: text})
       }) 
  
       socket.on('disconnected', () => {
           console.log('User had left!!!');
       })
    })
 
}