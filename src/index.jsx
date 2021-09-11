/**
 * =========================================================================
 * Entry Point
 * =========================================================================
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

/* ------------------[ Styles ] ---------------------- */
import './assets/styles/main.scss';
import 'font-awesome/css/font-awesome.min.css';
import './assets/icons/linearicons/style.css';
import './assets/icons/fontisto/style.css';
import './assets/icons/line-icons/linear-icons-regular.css';
import 'react-toastify/dist/ReactToastify.min.css';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
