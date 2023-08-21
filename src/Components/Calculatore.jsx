import React, { useState } from 'react';
import Row from './Row';
import "./Style.css"


const Calculator = () => {
    const [rows, setRows] = useState([{ value: 0, isEnabled: true }]);

    const handleAddRow = () => {
        setRows([...rows, { value: 0, isEnabled: true }]);
    };

    const handleRemoveRow = (index) => {
        const updatedRows = rows.filter((_, i) => i !== index);
        setRows(updatedRows);
    };

    const handleToggleRow = (index) => {
        const updatedRows = rows.map((row, i) =>
            i === index ? { ...row, isEnabled: !row.isEnabled } : row
        );
        setRows(updatedRows);
    };

    const handleIncrement = (index) => {
        const updatedRows = rows.map((row, i) =>
            i === index ? { ...row, value: row.value + 1 } : row
        );
        setRows(updatedRows);
    };

    const handleDecrement = (index) => {
        const updatedRows = rows.map((row, i) =>
            i === index ? { ...row, value: row.value - 1 } : row
        );
        setRows(updatedRows);
    };

    const total = rows.reduce((acc, row) => (row.isEnabled ? acc + row.value : acc), 0);

    return (
        <div className="calculator">
            <button onClick={handleAddRow}>Add Row</button>
            {rows.map((row, index) => (
                <Row
                    key={index}
                    value={row.value}
                    isEnabled={row.isEnabled}
                    onRemove={() => handleRemoveRow(index)}
                    onToggle={() => handleToggleRow(index)}
                    onIncrement={() => handleIncrement(index)}
                    onDecrement={() => handleDecrement(index)}
                />
            ))}
            <div className="total">Total: {total}</div>
        </div>
    );
};

export default Calculator;