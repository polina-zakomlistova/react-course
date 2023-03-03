import { useEffect } from 'react';

export default function (ref, func) {
    const clickHandler = (e) => {
        console.log(e);
        for (const path of e.composedPath()) {
            if (path == ref.current) {
                return;
            }
        }
        func();
    };

    useEffect(() => {
        window.addEventListener('click', clickHandler);

        return () => {
            window.removeEventListener('click', clickHandler);
        };
    }, []);
}
