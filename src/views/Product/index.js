import React from 'react';
import { Link, useParams } from 'react-router-dom';

//context
import { observer } from 'mobx-react-lite';
import useStore from '../../hooks/useStore';

import E404 from '../E404';

export default observer(Product);

function Product() {
    const [productsStore, cartStore] = useStore('products', 'cart');
    const { remove, add } = cartStore;
    const { getById } = productsStore;

    const params = useParams();
    const product = getById(params.id);
    if (!/^[1-9]+\d*$/.test(params.id) || product === undefined) {
        return <E404 />;
    }

    return (
        <div>
            <h1>Product</h1>
            <hr></hr>
            <div>
                <h2> {product.title}</h2>
                <div>Price: {product.price}$</div>
            </div>
            <div>
                {cartStore.inCart(product.id) ? (
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => remove(product.id)}
                    >
                        Remove item
                    </button>
                ) : (
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => add(product.id)}
                    >
                        Add to cart
                    </button>
                )}
            </div>
            <hr></hr>
            <Link to="/">Back to catalog</Link>
        </div>
    );
}
