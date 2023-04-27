import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

import StoreContext from './Context/store';

import rootStore from './store';

const store = new rootStore();

ReactDOM.render(
    <StoreContext.Provider value={store}>
        <App />
    </StoreContext.Provider>,
    document.querySelector('.app')
);

//import './tests/store-cart';
