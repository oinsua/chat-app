import React from 'react';
import {DivPathAutor, DivPathFriend, DivFriend, DivAutor} from './styled';

const Message = ({message: {user, text}, username}) => {
    let isUser = false;
    
    if(user === username)
        isUser = true;
        
    return (
        isUser 
              ? 
               (
                  <DivPathAutor>
                     <span>{user}:</span>
                     <DivAutor>
                      <span>{text}</span>
                     </DivAutor>
                  </DivPathAutor>
               ) 
             : 
               (
                  <DivPathFriend>
                     <DivFriend>
                       <span>{text}</span>
                     </DivFriend>
                     <span>: {user}</span>
                  </DivPathFriend>
               )
    )
}

export default Message;
