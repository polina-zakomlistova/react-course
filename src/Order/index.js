import React, { useContext, useState } from 'react';
import Styles from './style.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SettingsContext from './../Context/Settings';

export default function (props) {
    const { onNext, onPrev, fields, onChange } = props;
    const Settings = useContext(SettingsContext);
    let isValid = fields.every((f) => f.valid);

    return (
        <div
            className={`${Styles} + ${
                Settings.theme == 'dark' ? Styles.dark : ''
            }`}
        >
            <h1>Input data</h1>
            <hr></hr>
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
                                onChange(field.name, e.target.value.trim());
                            }}
                        />
                    </Form.Group>
                ))}
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={onNext}
                    disabled={!isValid}
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
