import React  from 'react';
import {Route, Switch} from 'react-router-dom';
//Importar componentes
import Home from './page/Home/Home';
import Chats from './page/Chats/Chats';
import Error from './page/Error/Error';
//Importar estiled components
import {Header, Link, Img, H1, DIV} from './styled';
//Importar archivos
import Logo from './asset/img/logo.png';
 
const App = () => {
    return ( 
        <> 
           <DIV>
                <Header> 
                    <Link to="/">
                        <H1>Web</H1>
                        <Img src={Logo} alt="Logo" />
                        <H1>Chat</H1>
                    </Link>
                </Header>
           </DIV>
            <Switch>
                <Route path="/" exact><Home/></Route>
                <Route path="/chats/:username/:room"><Chats/></Route>
                <Route path="/error"><Error/></Route>
            </Switch>
        </>
    );
}

export default App;
