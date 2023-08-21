import React from 'react';
import "./Style.css"

const Row = ({ value, isEnabled, onRemove, onToggle, onIncrement, onDecrement }) => {
    return (
        <div className="row">
            <button disabled={!isEnabled} onClick={onIncrement}>+</button>
            <button disabled={!isEnabled} onClick={onDecrement}>-</button>
            <input
                type="number"
                value={value}
                onChange={(e) => console.log(e.target.value)} // Update value logic
                disabled={!isEnabled}
            />
            <button onClick={onRemove}>Delete</button>
            <button onClick={onToggle}>{isEnabled ? 'Disable' : 'Enable'}</button>


        </div>
    );
};

export default Row;