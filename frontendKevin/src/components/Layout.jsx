import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#010414] luxury-grain flex flex-col">
            <Header />
            <div className="flex-grow pt-24">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
