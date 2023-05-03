import React from 'react';

import { Routes, Route } from 'react-router-dom';

//components
import Product from './views/Product';
import Products from './views/Products';
import Cart from './views/Cart';
import Order from './views/Order';
import Result from './views/Result';
import E404 from './views/E404';

export default function () {
    return (
        <Routes>
            <Route path="/" element={<Products />}></Route>
            <Route path="/product/:id" element={<Product />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/order" element={<Order />}></Route>
            <Route path="/result" element={<Result />}></Route>
            <Route path="*" element={<E404 />}></Route>
        </Routes>
    );
}

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Products />,
//         errorElement: <E404 />,
//     },
//     {
//         path: '/product/:id',
//         element: <Product />,
//         errorElement: <E404 />,
//     },
//     {
//         path: '/cart',
//         element: <Cart />,
//         errorElement: <E404 />,
//     },
//     {
//         path: '/order',
//         element: <Order />,
//         errorElement: <E404 />,
//     },
//     {
//         path: '/result',
//         element: <Result />,
//         errorElement: <E404 />,
//     },
// ]);
// return <RouterProvider router={router} />;
