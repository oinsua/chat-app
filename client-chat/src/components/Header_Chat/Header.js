import React from 'react';
import {DivHeader, Spanleft, Spanright, Link} from './styled';

const Header = ({params}) => {
    const {username, room} = params;

    return (
        <DivHeader>
           <Spanleft>Welcome, {username}, {room}</Spanleft>
           <Spanright><Link to="/">X</Link></Spanright> 
        </DivHeader>
    )
}

export default Header
