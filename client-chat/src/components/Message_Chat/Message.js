import React from 'react';
import Message from '../Message/Message';
//Importando Estilos
import {DivMsg, DivMessage} from './styled';

const Messages = ({params, messages}) => {
    //const {username, room} = params;
    console.log('dentro messages : ', messages);
    return (
        <DivMsg> 
            {
                messages.map((message, index) => (<DivMessage key={index}><Message message={message} username={params.username}/></DivMessage>))
            }  
        </DivMsg>
    )
}

export default Messages
