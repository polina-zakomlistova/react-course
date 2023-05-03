import React from 'react';
import { Link } from 'react-router-dom';

//context
import { observer } from 'mobx-react-lite';
import useStore from '../../hooks/useStore';
//import StoreContext from './../Context/store';
export default observer(Products);

function Products() {
    const [productsStore, cartStore] = useStore('products', 'cart');
    const { products } = productsStore;
    const { total, remove, add } = cartStore;

    return (
        <div>
            <h1>Catalog</h1>
            <hr></hr>
            <div className="row">
                {products.map((pr, i) => (
                    <div className="col col-4 mb-3" key={pr.id}>
                        <div className="card">
                            <div className="card-body">
                                <h3>{pr.title}</h3>
                                <div>{pr.price}</div>
                                <Link to={`/product/${pr.id}`}>Read more</Link>
                                <hr></hr>
                                {cartStore.inCart(pr.id) ? (
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => remove(pr.id)}
                                    >
                                        Remove item
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        className="btn btn-success"
                                        onClick={() => add(pr.id)}
                                    >
                                        Add to cart
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
