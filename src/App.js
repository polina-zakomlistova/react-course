import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import RouterView from './Routes';

import CartInfo from './components/Cart';

export default function App() {
    return (
        <>
            <header>
                <div className="container mt-1">
                    <div className="row justify-content-between">
                        <div className="col">Logo</div>
                        <CartInfo />
                    </div>
                </div>
            </header>
            <div className="container">
                <div className="row">
                    <aside className="col col-3">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li className="list-group-item">
                                <Link to={'/cart'}>Cart</Link>
                            </li>
                            <li className="list-group-item">
                                <Link to={'/order'}>Order</Link>
                            </li>
                            <li className="list-group-item">
                                <Link to={'/result'}>Result</Link>
                            </li>
                        </ul>
                    </aside>
                    <main className="col col-9">
                        <RouterView />
                    </main>
                </div>
            </div>

            <footer className="mt-1">
                <hr></hr>
                <div className="container">2023</div>
            </footer>
        </>
    );
}
