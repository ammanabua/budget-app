import React from 'react';
import Naira from 'react-naira';

const ExpenseTotal = () => {
    return (
        <div className='alert alert-primary'>
            <span>Expenditure: <Naira>80000</Naira></span>
        </div>
    );
};

export default ExpenseTotal;