import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Header /> {/* Asegura que el Header esté en la parte superior de todas las páginas */}
      <main>{children}</main> {/* Aquí se renderizan las rutas */}
      <Footer />
    </div>
  );
};

export default Layout;