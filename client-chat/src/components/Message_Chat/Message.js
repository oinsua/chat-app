import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';
//Importando Componentes
import Autor from '../Autor_Chat/Autor';
//Importando Estilos
import {DivMsg} from './styled';

const Message = ({params, endpoint}) => {
    const {username, room} = params;
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const socket = io(endpoint); 
        socket.emit('join', {username, room} ,(error) => {
            console.log(error);
        });

        return () => {
            socket.emit('disconnected');
            socket.off();
        }

    },[username, room, endpoint] )
    
   useEffect(() => {
       const socket = io(endpoint); 
       socket.on('message', (message) => {
           setMessages([...messages, message]);
       }) 
       console.log('lista mensaje: ', messages);
   }, [messages, endpoint])
    return (
        <DivMsg>
            {
                messages.map((index, message) => (<div key={index}><p>{message.user}</p><p>{message.text}</p></div>))
            }
        </DivMsg>
    )
}

export default Message
