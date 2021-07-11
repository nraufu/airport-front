/**
 * =========================================================================
 * Entry Point
 * =========================================================================
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

/* ------------------[ Styles ] ---------------------- */
import './assets/styles/main.scss';
import 'font-awesome/css/font-awesome.min.css';
import './assets/icons/linearicons/style.css';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
