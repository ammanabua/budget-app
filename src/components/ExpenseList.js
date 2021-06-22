import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const expenses = [
        { id: 1232413, name: "Electricity", cost: 8000},
        { id: 1232413, name: "Food", cost: 15000},
        { id: 1232413, name: "Transportation", cost: 35000},
        { id: 1232413, name: "Internet", cost: 10000},
        { id: 1232413, name: "Shopping", cost: 20000}
    ];

    return (
        <ul className='list-group'>
            {expenses.map(((expense)=> (
                <ExpenseItem 
                id={expense.id} 
                name={expense.name} 
                cost={expense.cost} />
            )))}
        </ul>
    );
};

export default ExpenseList;