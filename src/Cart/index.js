import React, { useContext } from 'react';

import MinMax from './../MinMax';
//context
import { observer } from 'mobx-react-lite';
import useStore from '../hooks/useStore';
//import StoreContext from './../Context/store';
export default observer(Cart);

function Cart(props) {
    const { onNext } = props;
    const [cart] = useStore('cart');
    const { products, total, remove, change } = cart;

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
                    {products.map((pr, i) => (
                        <tr key={pr.id}>
                            <td>{i + 1}</td>
                            <td>{pr.title}</td>
                            <td>{pr.price}</td>

                            <MinMax
                                max={pr.rest}
                                min={1}
                                current={pr.cnt}
                                onChange={(cnt) => change(pr.id, cnt)}
                            />

                            <td>{pr.price * pr.cnt}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    type="button"
                                    onClick={() => remove(pr.id)}
                                >
                                    Delete
                                </button>
                                <button
                                    className="btn btn-success"
                                    type="button"
                                    onClick={() => change(pr.id, pr.rest)}
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
                        <td>{total}</td>
                    </tr>
                </tfoot>
            </table>
            <hr></hr>
            <button type="button" className="btn btn-primary" onClick={onNext}>
                in order
            </button>
        </div>
    );
}
