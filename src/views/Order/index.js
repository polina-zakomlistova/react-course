import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Styles from './style.module.css';
//components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import BModal from '../../components/BootstrapModal';
//context
import { observer } from 'mobx-react-lite';
import useStore from '../../hooks/useStore';

export default observer(Order);

function Order() {
    const navigate = useNavigate();
    const [order] = useStore('order');
    const { fields, fieldUpdate, formValid } = order;

    const [show, setShow] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const sendForm = () => {
        setConfirmed(true);
        order.send();
        handleClose();
    };

    let onExited = () => {
        if (confirmed) {
            navigate('/result');
        }
    };

    return (
        <div className={Styles}>
            <h1>Input data</h1>
            <hr></hr>
            {
                <BModal
                    show={show}
                    onClose={handleClose}
                    onExited={onExited}
                    onClick={sendForm}
                    title={'Order'}
                    body={
                        <>
                            <p>You are sure?</p>
                            <p>This order will be sent</p>
                        </>
                    }
                />
            }
            <Form>
                {fields.map((field) => (
                    <Form.Group
                        className="mb-3"
                        controlId={field.name}
                        key={field.name}
                    >
                        <Form.Label>{field.label}</Form.Label>
                        <Form.Control
                            type="text"
                            className={`form-control ${
                                field.value.length && !field.valid
                                    ? 'border border-danger'
                                    : ''
                            }`}
                            name={field.name}
                            placeholder={field.name}
                            pattern={field.pattern}
                            value={field.value}
                            onChange={(e) => {
                                fieldUpdate(field.name, e.target.value);
                            }}
                        />
                    </Form.Group>
                ))}
                <Button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleShow}
                    disabled={!formValid}
                >
                    Send
                </Button>
            </Form>

            <Link className="btn btn-primary" to={'/'}>
                Back to cart
            </Link>
        </div>
    );
}
