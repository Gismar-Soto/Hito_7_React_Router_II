// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FaShoppingCart, FaHome, FaUser, FaSignInAlt, FaUserCircle, FaPizzaSlice } from 'react-icons/fa';
import { useCart } from './CartContext';

const MyNavbar = () => {
    const { total } = useCart(); // Obtener el total

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
            <Navbar.Brand as={Link} to="/">¡Pizzería Mamma Mía!</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/"><FaPizzaSlice style={{ color: 'orange' }} /> Home</Nav.Link>
                    <Nav.Link as={Link} to="/login"><FaSignInAlt /> Login</Nav.Link>
                    <Nav.Link as={Link} to="/register"><FaUser /> Register</Nav.Link>
                    <Nav.Link as={Link} to="/profile"><FaUserCircle /> Profile</Nav.Link>
                </Nav>
                <Button variant="outline-info" as={Link} to="/cart">
                    <FaShoppingCart /> Total : ${total.toLocaleString('es-ES')}
                </Button>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;
