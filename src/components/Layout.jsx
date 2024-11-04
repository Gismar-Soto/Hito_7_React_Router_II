import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Header />
      <main>{children}</main> {/* Aquí se renderizan las rutas */}
      <Footer />
    </div>
  );
};

export default Layout;