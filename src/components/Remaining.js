import React, { useContext } from 'react';
import Naira from 'react-naira';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success'

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: <Naira>{budget - totalExpenses}</Naira></span>
        </div>
    );
}

export default Remaining;