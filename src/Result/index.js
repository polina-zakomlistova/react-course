import React, { useState } from 'react';

import { observer } from 'mobx-react-lite';
import useStore from '../hooks/useStore';

export default observer(Result);

function Result(props) {
    const { onNext } = props;
    const [cart, order] = useStore('cart', 'order');
    const { total } = cart;
    const { data } = order;

    return (
        <div>
            <h1>{data.name}, your order is done!</h1>
            <hr></hr>
            <strong>Total: {total}</strong>
        </div>
    );
}
