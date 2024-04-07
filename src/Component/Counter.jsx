import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCountDecrement, setCountIncrement, setCountIncrementBy5 } from '../Redux/Slices/counterSlice';

const Counter = () => {
    const count = useSelector((state) => {
        return state.counter.count;
    });

    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(setCountIncrement());
    };
    const handleDecrement = () => {
        dispatch(setCountDecrement());
    };
    const handleIncrementBy5 = () => {
        dispatch(setCountIncrementBy5(5));
    };
    return (
        <dev>
            <h1>{count}</h1>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleIncrementBy5}>+5</button>
        </dev>
    )

}

export default Counter