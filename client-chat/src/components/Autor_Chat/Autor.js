import React from 'react';
import {Div_Path_Autor, Div_Path_Friend, Div_Friend, Div_Autor} from './styled';

const Autor = ({message, username}) => {
    

    return (
        <>
      {    
            message.from === username &&
                     (<Div_Path_Autor>
                        <Div_Autor>
                        <i>{message.from}</i> :{message.msg}
                        </Div_Autor>
                     </Div_Path_Autor>)
      } 
       {    
            message.from !== username &&
                     (<Div_Path_Friend>
                        <Div_Friend>
                        <i>{message.from}</i> :{message.msg}
                        </Div_Friend>
                     </Div_Path_Friend>)
      } 
      </>
    )
}

export default Autor
