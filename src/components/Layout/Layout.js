import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Main, MainContent } from './Layout.styled';

const Layout = (props) => {
    const { children } = props;
    return (
        <Main>
            <Navbar />
            <MainContent>
                {children}
            </MainContent>
            <Footer />
        </Main>
    )
}

export default Layout