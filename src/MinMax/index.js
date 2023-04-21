import React, { useEffect, useRef, useState } from 'react';
import propTypes from './props';
import styles from './style.module.css';

import useWindowSize from '../hooks/useWindowSize';

MinMaxLazy.propTypes = propTypes;

export default function MinMaxLazy(props) {
    let { max, min = 1, current, onChange } = props;
    const { width, height } = useWindowSize();

    const inp = useRef();

    useEffect(() => {
        inp.current.value = current;
    }, [current]);

    const inc = () => applyCurrent(current + 1);
    const dec = () => applyCurrent(current - 1);

    function getValid(number) {
        if (number >= min && number <= max) {
            return number;
        } else if (number <= min) {
            return min;
        } else if (number >= max) {
            return max;
        }
        //Math.max(min, Math.min(max,newNumber))
    }

    function callbackOnChange(number) {
        onChange(+inp.current.value);
    }

    function applyCurrent(number) {
        const numberInt = parseInt(number);
        const validNum = isNaN(numberInt) ? getValid(min) : getValid(numberInt);
        inp.current.value = validNum;
        callbackOnChange();
    }

    function blurHandler() {
        applyCurrent(inp.current.value);
    }

    function keyUpHandler(e) {
        if (e.code === 'Enter') {
            applyCurrent(inp.current.value);
        }
    }

    let paddingSize = Math.min(parseInt(width / 600), 5);
    let classNamePadding = `p-${paddingSize}`;

    return (
        <>
            <button
                className={`btn btn-warning + ' ' + ${classNamePadding}`}
                type="button"
                onClick={dec}
            >
                -
            </button>
            <input
                type="text"
                className={styles.inp}
                ref={inp}
                onBlur={blurHandler}
                onKeyUp={keyUpHandler}
                defaultValue={current}
            ></input>
            <button
                className={`btn btn-success + ' ' + ${classNamePadding}`}
                type="button"
                onClick={inc}
            >
                +
            </button>
        </>
    );
}
