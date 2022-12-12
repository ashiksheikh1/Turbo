import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/header/Nav';
import Footer from '../pages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;