import React from 'react';
import {ButtonForm} from './styled'

const Button = ({name, value, type}) => {
    return (
        <>
            <ButtonForm  
                 id={name}
                 name={name}
                 type={type}
                 value={value}
            >
                {value}
            </ButtonForm>
        </>
    )
}

export default Button
