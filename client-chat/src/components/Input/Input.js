import React from 'react';
import {Label, InputF} from './styled';

const Input = ({name, type, msg}) => {
    
  const handleClear = (e) => {
     e.target.value = '';
  }


  return (
        <>
          <InputF  
                name={name} 
                type={type} 
                placeholder={msg} 
                onClick={handleClear}
          />  
        </>
    )
}

export default Input