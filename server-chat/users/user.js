const users = [];

const addUser = ({id, username, room}) => {
 
   const existUser = users.find((user) => user.username === username && user.room === room);

   if(existUser) return {error: 'User is taken'}

   const user = {id, username, room};
   users.push(user);
   console.log('despues list user: ', users)
   return {user};
}

const removeUser = (id) => {
    
    const index = users.findIndex((user) => { user.id ===id});
    
    if(index !== -1)
     return users.splice(index, 1)[0];
}

const getUser = (username) => ( users.find(user => user.username === username));

const getUserInRoom = (room) => (users.filter(user.room === room));

module.exports = {addUser, removeUser, getUser, getUserInRoom};