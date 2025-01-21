import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../context/counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter);

    const dispatch = useDispatch();

    return (
        <>
            <p>Initial Value: {count}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </>
    )
}

export default Counter;