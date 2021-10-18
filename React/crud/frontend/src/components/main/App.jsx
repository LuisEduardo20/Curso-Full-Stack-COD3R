import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import React from 'react';

import Logo from '../template/logo/Logo';
import Nav from '../template/nav/Nav';
import Home from '../home/Home';
import Footer from '../template/footer/Footer'

export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Home />
        <Footer />
    </div>