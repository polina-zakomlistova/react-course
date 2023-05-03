import React, { useState } from 'react';

import { observer } from 'mobx-react-lite';
import useStore from '../../hooks/useStore';

export default observer(Cart);

function Cart() {
    const [cart] = useStore('cart');
    const { total, items } = cart;

    return (
        <div>
            <div>
                <strong>in cart: {items.length}</strong>
            </div>
            <div>
                <strong>Total: {total}</strong>
            </div>
        </div>
    );
}
