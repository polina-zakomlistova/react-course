import React from 'react';
import MinMax from './../MinMax';

export default function (props) {
    const { onNext, products, onChange, onRemove } = props;

    const totalCost = products.reduce(
        (accumulator, current) => accumulator + current.price * current.cnt,
        0
    );
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
                                onChange={(cnt) => onChange(pr.id, cnt)}
                            />

                            <td>{pr.price * pr.cnt}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    type="button"
                                    onClick={() => onRemove(pr.id)}
                                >
                                    Delete
                                </button>
                                <button
                                    className="btn btn-success"
                                    type="button"
                                    onClick={() => onChange(pr.id, pr.rest)}
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
            <hr></hr>
            <button type="button" className="btn btn-primary" onClick={onNext}>
                in order
            </button>
        </div>
    );
}
