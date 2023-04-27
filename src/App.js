import React, { useState } from 'react';

import Cart from './Cart';
import Order from './Order';
import Result from './Result';

import SettingContext from './Context/settings';
export default function App() {
    //settings
    let [settings, setSetting] = useState({ lang: 'ru', theme: 'dark' });
    //router parody
    const [page, setPage] = useState('cart');

    const moveToCart = () => setPage('cart');
    const moveToOrder = () => setPage('order');
    const moveToResult = () => setPage('result');

    return (
        <SettingContext.Provider value={settings}>
            (
            <div className="container mt-1">
                <header>
                    <button
                        type="button"
                        onClick={() =>
                            setSetting({ ...settings, theme: 'light' })
                        }
                    >
                        light
                    </button>
                    <button
                        type="button"
                        onClick={() =>
                            setSetting({ ...settings, theme: 'dark' })
                        }
                    >
                        dark
                    </button>

                    <button
                        type="button"
                        onClick={() => setSetting({ ...settings, lang: 'ru' })}
                    >
                        ru
                    </button>
                    <button
                        type="button"
                        onClick={() => setSetting({ ...settings, lang: 'en' })}
                    >
                        en
                    </button>
                </header>

                {page === 'cart' && <Cart onNext={moveToOrder} />}
                {page === 'order' && (
                    <Order onNext={moveToResult} onPrev={moveToCart} />
                )}
                {page === 'result' && <Result onNext={moveToCart} />}
            </div>
            );
        </SettingContext.Provider>
    );
}
