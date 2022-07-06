import React from 'react';
//Routing
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './compomets/Header';
import Home from './compomets/Home';
//style
import { GlobalStlye } from './GlobalStyle';
import Movie from './compomets/Movie';
import NotFound from './compomets/NotFund';



const App = ()=>  (
  <Router >
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/:movieId" element={<Movie/>} />
            <Route path="/*" element={<NotFound/>} />
        </Routes>
        <GlobalStlye/>
        </Router>
    );


export default App;