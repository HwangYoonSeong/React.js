import React from 'react';

const Counter = ({

    onIncrement,
    onDecrement,
    number,
    test
}) => {
    return (
        <div>
            <h1>{number}</h1>
            <h1>{test}</h1>

            <button onClick={onIncrement}>증가 (+)</button>
            <button onClick={onDecrement}>감소 (-)</button>
        </div>
    );
};

Counter.defaultProps = {
    number: 0
}

export default Counter;