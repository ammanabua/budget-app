import React, { useContext } from 'react';
import Naira from 'react-naira';
import { AppContext } from '../context/AppContext';



const ExpenseTotal = () => {

    const { expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item)=> {
        return (total += item.cost)
    }, 0);
    
    return (
        <div className='alert alert-primary'>
            <span>Expenditure: <Naira>{totalExpenses}</Naira></span>
        </div>
    );
};

export default ExpenseTotal;