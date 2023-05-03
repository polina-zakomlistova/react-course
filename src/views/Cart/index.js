import React from 'react';
import { Link } from 'react-router-dom';

import MinMax from './../../components/MinMax';
//context
import { observer } from 'mobx-react-lite';
import useStore from '../../hooks/useStore';
//import StoreContext from './../Context/store';
export default observer(Cart);

function Cart() {
    const [cartStore] = useStore('cart');
    const { itemsDetailed: products, total, remove, change } = cartStore;

    return (
        <div>
            <h1>Cart</h1>
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
                    {products.map((item, i) => {
                        return (
                            <tr key={item.id}>
                                <td>{i + 1}</td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>

                                <MinMax
                                    max={item.rest}
                                    min={1}
                                    current={item.cnt}
                                    onChange={(cnt) => change(item.id, cnt)}
                                />

                                <td>{item.price * item.cnt}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        type="button"
                                        onClick={() => remove(item.id)}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className="btn btn-success"
                                        type="button"
                                        onClick={() =>
                                            change(item.id, item.rest)
                                        }
                                    >
                                        Buy all
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total cost</td>
                        <td>{total}</td>
                    </tr>
                </tfoot>
            </table>
            <hr></hr>
            <Link className="btn btn-primary" to={'/order'}>
                in order
            </Link>
        </div>
    );
}
