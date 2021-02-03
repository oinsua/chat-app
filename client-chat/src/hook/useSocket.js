import io from 'socket.io-client';
import {useState} from 'react';

export const useSocket = () => {
    const socket = io();
    const [errorUser, setErrorUse] = useState(false)

    const io_emit = (event, data) => {
        
        if(event.length !== 0 && data.chats.length !== 0){
          socket.emit(event, data.chats, res => {
                console.log('respuesta del cb', res)
                return {
                    io_emit,
                    res
                   }; 
            })
        }
    }
}

