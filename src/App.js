import React, { useMemo, useState } from 'react';
import MinMax from './MinMax';

import Modal from './Modal';

export default function App() {
    let [products, setProducts] = useState(productsStub());

    let setCntHandle = (id, cnt) => {
        setProducts(products.map((pr) => (pr.id !== id ? pr : { ...pr, cnt })));
        // let newProducts = [...products];
        // let productIndex = products.findIndex((el) => el.id === id);
        // let newProduct = { ...products[productIndex] };

        // newProduct.cnt = cnt;
        // newProducts[id] = newProduct;
        // setProducts(newProducts);
    };

    let deleteProductHandle = (id) => {
        setProducts(products.filter((pr) => pr.id !== id));
    };

    const totalCost = products.reduce(
        (accumulator, current) => accumulator + current.price * current.cnt,
        0
    );

    // Тяжелая операция, применятт, если тысячи строк, иначе спорно
    //const totalCost2 = useMemo(() =>
    //     products.reduce(
    //         (accumulator, current) => accumulator + current.price * current.cnt,
    //         0
    //     ),[products]
    // );

    return (
        <div className="container">
            <h1>Products list</h1>
            <table>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Cnt</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((pr, i) => (
                        <tr key={pr.id}>
                            <td>{i + 1}</td>
                            <td>{pr.title}</td>
                            <td>{pr.price}</td>
                            <MinMax
                                max={pr.rest}
                                min={10}
                                current={pr.cnt}
                                onChange={(cnt) => setCntHandle(pr.id, cnt)}
                            />
                            <td>{pr.price * pr.cnt}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    type="button"
                                    onClick={() => deleteProductHandle(pr.id)}
                                >
                                    Delete
                                </button>
                                <button
                                    className="btn btn-success"
                                    type="button"
                                    onClick={() => setCntHandle(pr.id, pr.rest)}
                                >
                                    Buy all
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total cost</td>
                        <td>{totalCost}</td>
                    </tr>
                </tfoot>
            </table>
            <Modal />
        </div>
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
