import React, { useState } from 'react';
import PropTypes, { number } from 'prop-types';

export default function Counter(props) {
    let { max, min = 1, current, onChange } = props;

    const [value, setValue] = useState(current);

    const inc = () => setValid(current + 1);
    const dec = () => setValid(current - 1);

    function setValid(number) {
        if (number >= min && number <= max) {
            setValue(number);
        } else if (number <= min) {
            setValue(min);
        } else if (number >= max) {
            setValue(max);
        }
        //Math.max(min, Math.min(max,newNumber))
    }

    function changeHandler(e) {
        const newNumber = parseInt(e.target.value);
        if (isNaN(newNumber)) {
            setValue(min);
        } else {
            setValue(newNumber);
        }
    }

    function blurHandler() {
        setValid(value);
        if (value !== current) {
            onChange(value);
        }
    }

    function keyUpHandler(e) {
        if (e.code === 'Enter') {
            blurHandler();
        }
    }

    return (
        <>
            <button type="button" onClick={dec}>
                -
            </button>
            <input
                type="text"
                onChange={changeHandler}
                onBlur={blurHandler}
                onKeyUp={keyUpHandler}
                value={value}
            ></input>
            <button type="button" onClick={inc}>
                +
            </button>
        </>
    );
}

Counter.propTypes = {
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    setCnt: PropTypes.func.isRequired,
};
