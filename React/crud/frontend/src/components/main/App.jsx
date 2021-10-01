import './App.css';
import React from 'react';

import Logo from '../template/logo/Logo';
import Nav from '../template/nav/Nav';
import Main from '../template/main/Main';
import Footer from '../template/footer/Footer'

export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Main />
        <Footer />
    </div>