import React, { useState } from 'react';

import Cart from './Cart';
import Order from './Order';
import Result from './Result';

import SettingsContext from './Context/Settings';

export default function App() {
    //setttings
    let [settings, setSetting] = useState({ lang: 'ru', theme: 'dark' });
    //router parody
    const [page, setPage] = useState('cart');
    //products
    let [products, setProducts] = useState(productsStub());
    //order
    let [orderForm, setOrderForm] = useState([
        {
            name: 'email',
            label: 'Email',
            value: '',
            valid: false,
            pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
        },
        {
            name: 'phone',
            label: 'Phone',
            value: '',
            valid: false,
            pattern: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
        },
        {
            name: 'name',
            label: 'Name',
            value: '',
            valid: false,
            pattern: /^.{2,}$/,
        },
    ]);

    let orderFormUpdate = (name, value) => {
        setOrderForm(
            orderForm.map((field) => {
                if (field.name != name) {
                    return field;
                }

                let valid = field.pattern.test(value);
                return { ...field, value, valid };
            })
        );
    };

    let setProductCntHandle = (id, cnt) => {
        setProducts(products.map((pr) => (pr.id !== id ? pr : { ...pr, cnt })));
    };
    let removeProductHandle = (id) => {
        setProducts(products.filter((pr) => pr.id !== id));
    };

    const moveToCart = () => setPage('cart');
    const moveToOrder = () => setPage('order');
    const moveToResult = () => setPage('result');

    let orderData = {};

    orderForm.forEach((field) => {
        orderData[field.name] = field.value;
    });

    return (
        <SettingsContext.Provider value={settings}>
            (
            <div className="container mt-1">
                <button
                    type="button"
                    onClick={() => setSetting({ ...settings, theme: 'light' })}
                >
                    light
                </button>
                <button
                    type="button"
                    onClick={() => setSetting({ ...settings, theme: 'dark' })}
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
                {page === 'cart' && (
                    <Cart
                        onNext={moveToOrder}
                        products={products}
                        onChange={setProductCntHandle}
                        onRemove={removeProductHandle}
                    />
                )}
                {page === 'order' && (
                    <Order
                        onNext={moveToResult}
                        onPrev={moveToCart}
                        fields={orderForm}
                        onChange={orderFormUpdate}
                    />
                )}
                {page === 'result' && (
                    <Result
                        products={products}
                        orderData={orderData}
                        onNext={moveToCart}
                    />
                )}
            </div>
            );
        </SettingsContext.Provider>
    );
}

function productsStub() {
    return [
        {
            id: 100,
            title: 'Ipnone 200',
            price: 12000,
            rest: 5000,
            cnt: 10,
        },
        {
            id: 101,
            title: 'Samsung AAZ8',
            price: 22000,
            rest: 5,
            cnt: 1,
        },
        {
            id: 103,
            title: 'Nokia 3310',
            price: 5000,
            rest: 2,
            cnt: 1,
        },
        {
            id: 105,
            title: 'Huawei ZZ',
            price: 15000,
            rest: 8,
            cnt: 1,
        },
    ];
}
