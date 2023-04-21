import React, { useState } from 'react';
import BModal from './../BootstrapModal';
import Button from 'react-bootstrap/Button';

export default function (props) {
    const { products, orderData, onNext } = props;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const sendForm = () => onNext();
    const totalCost = products.reduce(
        (accumulator, current) => accumulator + current.price * current.cnt,
        0
    );
    return (
        <div>
            <h1>{orderData.name}, your order is done!</h1>
            <hr></hr>
            <strong>Total: {totalCost}</strong>
            <Button variant="primary" onClick={handleShow}>
                Send
            </Button>
            <BModal
                title="Attention!"
                body="Are you sure thet these orders are correct?"
                onClose={handleClose}
                onClick={sendForm}
                show={show}
            />
        </div>
    );
}
