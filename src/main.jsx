
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './components/CartContext';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <CartProvider>
        <App />
    </CartProvider>,
    document.getElementById('root')
);
