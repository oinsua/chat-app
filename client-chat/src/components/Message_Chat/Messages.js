import React, {useEffect, useRef} from 'react';
import Message from '../Message/Message';
//Importando Estilos
import {DivMsg, DivMessage} from './styled';

const Messages = ({params, messages}) => {

    /*Efecto que se encarga de mantener constantemente subiendo el Div */
    const divRef = useRef(null);
    useEffect(() => {
        divRef.current.scrollIntoView({behavior: 'smooth'})
    })

    return (
        <DivMsg> 
            {
                messages.map((message, index) => (<DivMessage key={index}><Message message={message} username={params.username}/></DivMessage>))
            }
          <div ref={divRef}></div>  
        </DivMsg>
    )
}

export default Messages
