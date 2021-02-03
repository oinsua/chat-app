import React, { useState, useRef, useEffect} from 'react'
import {Helmet} from "react-helmet";
import io from 'socket.io-client';
//Importando hooks
import { useHistory } from "react-router-dom";
//Importando styled
import {DivForm, DivInput, SpanError, Input, Button}  from './styled';
//Importando el favicon
import favicon from '../../asset/img/favicon.png';

const Home = () => {

     /*Iniciando los hook que se van a utilizar */
     const history = useHistory(); //Se crea un objeto para la navegacion
     const inputRef = useRef(null);
     const [data, setData] = useState({username: '', room: ''});
     const [error, setError] = useState(false);
    //Evento que se encarga de enviar el formulario a la Chat
    const handleSubmit =  (e) => {
        e.preventDefault();
        const socket = io('localhost:4000');
        const {username, room} = data;
        socket.emit('join', {username, room} ,(error) => {
           error ? setError(error) : history.push(`/chats/${data.username}/${data.room}`) 
        });        
    }
    //Evento para mantener los input controlados
    const handleInputChange = (e) => {
        console.log(e.target.value)
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
   //Efecto para colar el focus en el primer input
    useEffect(() => {
       inputRef.current.focus();
    }, [])
 
    
    return (
        <>
             <Helmet>
                <title>Home_Web_Chat</title>
                <meta name="application-name" content="home_web_chat" />
                <meta name="description" content="home_web_chat"/>
                <meta name="google" content="notranslate"/>
                <link rel="icon" href={ favicon } sizes="32x32" type="image/png"></link>
             </Helmet>
            <DivForm>
            <form onSubmit={handleSubmit}>
                    <DivInput>
                        <Input  name="username" type="text"  onChange={handleInputChange} ref={inputRef}/>
                        <Input  name="room" type="text"  onChange={handleInputChange}/>
                        <Button name="send" value="Send" type="submit">SEND</Button>
                    </DivInput>
                    <SpanError>
                        <SpanError>{error}</SpanError>
                    </SpanError>
            </form>
            </DivForm>
        </>
    )
}

export default Home
