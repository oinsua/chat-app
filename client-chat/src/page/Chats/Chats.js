import React, {useEffect, useState} from 'react';
import socket from '../../socket/socket';
import {Helmet} from "react-helmet";
import { useParams} from "react-router-dom";
//Importando Compoenentes
import Box from '../../components/Box_Chat/Box';
import Messages from '../../components/Message_Chat/Message';
import Header from '../../components/Header_Chat/Header';
//Importar Estilos
import {DivChat, DivContainer} from './styled';
//Importando el favicon
//import favicon from '../../asset/img/favicon.png'

const Chats = () => {
    /*Tomando el parametro enviado por la url */
    const params = useParams();
    const [messages, setMessages] = useState([]);
    console.log(params);


    useEffect(() => {
      const {username, room} = params;
      console.log('socket chat', socket.id);
      
     /*  socket.emit('join', {username, room}, (error) => {
            console.log('error desde server: ', error)
      }); */

      socket.emit('loading', {username, room}, (error) => {
        console.log('error desde server: ', error)
      });
    
      /* socket.on('message', (message) => {
          console.log(message);
      }) */

      return () => {
          socket.on('disconnected');
          socket.off();
      }

    },[params])

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
            console.log('list messages: ',messages);
        })
    },[messages])

    return (
        <>
        <Helmet>
                <title>Web_Chat</title>
                <meta name="application-name" content="web_chat" />
                <meta name="description" content="web_chat"/>
                <meta name="google" content="notranslate"/>
                <link rel="icon" href="{favicon}" sizes="32x32" type="image/png"></link>
        </Helmet>
        <DivContainer>
            <DivChat>
                <Header params={params}/>
                <Messages params={params} messages={messages}/>
                <Box params={params}/>
            </DivChat>
        </DivContainer>
        </>
    )
}

export default Chats
