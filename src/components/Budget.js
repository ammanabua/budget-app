import React from 'react';
import Naira from 'react-naira';

const Budget = () =>  {
    return (
        <div className='alert alert-secondary'>
            <span>Budget: <Naira>100000</Naira></span>
        </div>
    )
}

export default Budget;