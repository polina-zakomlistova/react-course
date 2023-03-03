import { useEffect } from 'react';

export default function (ref, func) {
    const clickHandler = (e) => {
        console.log(e);
        if (!ref.current.contains(e.target)) {
            func();
        }
    };

    useEffect(() => {
        window.addEventListener('click', clickHandler);

        return () => {
            window.removeEventListener('click', clickHandler);
        };
    }, [ref, func]);
}
