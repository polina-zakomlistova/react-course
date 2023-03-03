import React, { useEffect, useState } from 'react';
import PropTypes, { number } from 'prop-types';

export default function Counter(props) {
    let { max, min = 1 } = props;
    let [current, setCurrent] = useState(min);

    useEffect(() => {
        setValidCurrent(current);
    }, [min, max]);

    function inc() {
        if (current < max) {
            setCurrent(current + 1);
        }
    }

    function dec() {
        if (current > min) {
            setCurrent(current - 1);
        }
    }

    function setValidCurrent(number) {
        if (number >= min && number <= max) {
            setCurrent(number);
        } else if (number <= min) {
            setCurrent(min);
        } else if (number >= max) {
            setCurrent(max);
        }
        //Math.max(min, Math.min(max,newNumber))
    }

    function handleSubmit(e) {
        if (isNaN(e.target.value)) {
            return;
        }

        const newNumber = parseInt(e.target.value);

        setValidCurrent(newNumber);
    }

    return (
        <>
            <button type="button" onClick={dec}>
                -
            </button>
            <input type="text" onChange={handleSubmit} value={current}></input>
            <button type="button" onClick={inc}>
                +
            </button>
        </>
    );
}

Counter.propTypes = {
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
};
