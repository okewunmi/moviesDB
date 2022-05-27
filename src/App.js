import React from 'react';
import Header from './compomets/Header';
import Home from './compomets/Home';
//style
import { GlobalStlye } from './GlobalStyle';



function App() {
    return ( <div className = "App" >
        <Header/>
        <Home/> 
        <GlobalStlye/>
        
        </div>
    );
}

export default App;