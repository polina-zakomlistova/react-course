import { useEffect } from 'react';

export default function (ref, func) {
    const clickHandler = (e) => {
        console.log(e);
        if (!ref.current.contains(e.target)) {
            func();
        }
    };

    useEffect(() => {
        window.addEventListener('mousedown', clickHandler);
        window.addEventListener('touchstart', clickHandler);

        return () => {
            window.addEventListener('mousedown', clickHandler);
            window.addEventListener('touchstart', clickHandler);
        };
    }, [ref, func]);
}
