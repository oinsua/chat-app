import React, {useEffect, useState} from 'react';
import socket from '../../socket/socket';
import {Helmet} from "react-helmet";
import { useParams} from "react-router-dom";
//Importando Compoenentes
import Box from '../../components/Box_Chat/Box';
import Messages from '../../components/Message_Chat/Messages';
import Header from '../../components/Header_Chat/Header';
//Importar Estilos
import {DivChat, DivContainer} from './styled';
//Importando el favicon
import favicon from '../../asset/img/favicon.png'

const Chats = () => {
    /*Tomando el parametro enviado por la url */
    const params = useParams();
    const [messages, setMessages] = useState([]);
    /*Efecto para enviar los datos que se necesitan para inicializar el chat */
    useEffect(() => {
      const {username, room} = params; //Se reciben los parametros por la url a traves de router
    
      socket.emit('loading', {username, room}, (error) => { //Emite el evento loading
        console.log('error desde server: ', error)
      });
    
      return () => { 
          socket.on('disconnected'); //Se recibe el evento desconectar
          socket.off(); //Se cierre el enlace
      }
    },[params])
    /*Efecto que se encarga de recibir los mensajes enviados desde el server */
    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]); //Se asignan los new mensajes
        })
    },[messages])

    return (
        <>
        <Helmet>
                <title>Web_Chat</title>
                <meta name="application-name" content="web_chat" />
                <meta name="description" content="web_chat"/>
                <meta name="google" content="notranslate"/>
                <link rel="icon" href={favicon} sizes="32x32" type="image/png"></link>
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
