import React from 'react';
import socket from '../../socket/socket';
import {DivHeader, Spanleft, Spanright, Link} from './styled';

const Header = ({params}) => {
    const {username, room} = params;

    const handleClick = () => {
        console.log('llego aqui')
        socket.emit('disconnected', {username}); //Se recibe el evento desconectar
        socket.off(); //Se cierre el enlace
    }
    return (
        <DivHeader>
           <Spanleft>Welcome, {username}, {room}</Spanleft>
           <Spanright><Link to="/" onClick={handleClick}>X</Link></Spanright> 
        </DivHeader>
    )
}

export default Header
