import { Outlet } from 'react-router-dom';
import React from 'react';
import Nav from './Nav';

const Layout = () => {
    return (
        <main>
            <Nav />
            <Outlet />
        </main>
    );
}

export default Layout;