import React from 'react';
import {Helmet} from "react-helmet";
import { useParams} from "react-router-dom";
//Importando Compoenentes
import Box from '../../components/Box_Chat/Box';
import Message from '../../components/Message_Chat/Message';
import Header from '../../components/Header_Chat/Header';
//Importar Estilos
import {DivChat, DivContainer} from './styled';
//Importando el favicon
//import favicon from '../../asset/img/favicon.png'

const Chats = () => {
    /*Tomando el parametro enviado por la url */
    const params = useParams();
    const ENDPOINT = 'localhost:4000';
    console.log(params);

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
                <Message params={params} endpoint={ENDPOINT}/>
                <Box params={params} endpoint={ENDPOINT}/>
            </DivChat>
        </DivContainer>
        </>
    )
}

export default Chats
