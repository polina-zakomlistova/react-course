import React, { useRef, useState } from 'react';

import styles from './style.module.css';

import useClickOutsize from '../hooks/useClickOutsize';

export default function Modal() {
    const [classContainer, setClassContainer] = useState(styles.container);
    const modalRef = useRef();

    const hideElement = () => {
        setClassContainer(classContainer + ' ' + styles.hidden);
    };
    useClickOutsize(modalRef, hideElement);

    console.log(classContainer);

    return (
        <alert ref={modalRef} className={classContainer}>
            <div>Щелкни мимо меня!</div>
        </alert>
    );
}
