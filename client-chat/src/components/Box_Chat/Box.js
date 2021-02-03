import React, {useState} from 'react'
import io from 'socket.io-client';

//Importando styled 
import {DivForm, DivInput, SpanError, Button, Input}  from './styled';

const Box = ({params, endpoint}) => {
    const socket = io(endpoint);

    const [message, setMessage] = useState({});
  
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('send message box: ', params.username, e.target.msg.value )
        if(e.target.msg.value.length !== 0){
           socket.emit('send_message', {
               user: params.username,
               text: e.target.msg.value
            })
          } 
      
    }

    const handleInputChange = (e) => {
        console.log('msg en box', e.target.value)
        setMessage({
            ...message,
            [e.target.name]: e.target.value
        })
    }

    return (
            <DivForm>
                <form onSubmit={handleSubmit}>
                    <DivInput>
                    <Input  name="msg" type="text"  onChange={handleInputChange}/>
                        <Button name="send" value="Send" type="submit">SEND</Button>
                    </DivInput>
                </form>
                <SpanError>
                    
               </SpanError>
            </DivForm>
    )
}

export default Box
