import React, { useContext, useState } from 'react';

import Styles from './style.module.css';
//components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import BModal from './../BootstrapModal';
//context
import { observer } from 'mobx-react-lite';
import useStore from '../hooks/useStore';
import SettingsContext from '../Context/settings';

export default observer(Order);

function Order(props) {
    const { onNext, onPrev } = props;
    const [order] = useStore('order');
    const { fields, fieldUpdate, formValid } = order;
    const Settings = useContext(SettingsContext);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const sendForm = () => {
        onNext();
        order.send();
    };

    return (
        <div
            className={`${Styles} + ${
                Settings.theme == 'dark' ? Styles.dark : ''
            }`}
        >
            <h1>Input data</h1>
            <hr></hr>
            <BModal
                title="Attention!"
                body="Are you sure thet these orders are correct?"
                onClose={handleClose}
                onClick={sendForm}
                show={show}
            />
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
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleShow}
                    disabled={!formValid}
                >
                    in result
                </button>
            </Form>

            <Button type="button" className="btn btn-warning" onClick={onPrev}>
                in cart
            </Button>
        </div>
    );
}
