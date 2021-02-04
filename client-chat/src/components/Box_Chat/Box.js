import React from 'react';
import socket from '../../socket/socket';
//Importando styled 
import {DivForm, DivInput, SpanError, Button, Input, Form}  from './styled';

const Box = ({params}) => {
   
    const handleSubmit = (e) => {
        e.preventDefault();
        const message = {
            user: params.username,
            text: e.target.msg.value
        }
        if(e.target.msg.value.length !== 0){
             socket.emit('send_message', message,(error) => {
                console.log('error desde server: ', error)
              });  
              e.target.msg.value = '';   
       }
}

    const handleInputChange = (e) => {
        e.target.name = e.target.value;
    }

    const handleKeyPress = (e) => {
        
        if(e.key === 'Enter' && e.target.value.length !== 0){
            e.preventDefault();
        const message = {
            user: params.username,
            text: e.target.value
        }
        socket.emit('send_message', message,(error) => {
            console.log('error desde server: ', error)
          });
          e.target.value = ''; 
        }
       

    }

    return (
            <DivForm>
                <Form onSubmit={handleSubmit}>
                    <DivInput>
                        <Input  id="text" name="msg" cols="20" rows="3"  onChange={handleInputChange} onKeyPress={handleKeyPress} required/>
                        <Button name="send" value="Send" type="submit">SEND</Button>
                    </DivInput>
                </Form>
                <SpanError>
                    
               </SpanError>
            </DivForm>
    )
}
export default Box;
