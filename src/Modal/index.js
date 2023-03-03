import React, { useRef, useState } from 'react';

import styles from './style.module.css';

import useClickOutsize from '../hooks/useClickOutsize';

export default function Modal(props) {
    const { title, buttonText, buttonClick, showed, onClose, children } = props;
    let classContainer = [styles.container];

    const modalRef = useRef();

    if (!showed) {
        classContainer.push(styles.hidden);
    }

    useClickOutsize(modalRef, () => {
        if (showed) {
            onClose();
        }
    });

    const content = children ? (
        <>
            {children}
            <hr></hr>
        </>
    ) : null;

    return (
        <div ref={modalRef} className={classContainer.join(' ')}>
            <p>{title}</p>
            <hr></hr>
            {content}
            <button className="btn btn-success" onClick={buttonClick}>
                {buttonText}
            </button>
        </div>
    );
}
