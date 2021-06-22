import React from 'react';
import Naira from 'react-naira';

const Remaining = () => {
    return (
        <div className='alert alert-success'>
            <span>Remaining: <Naira>20000</Naira></span>
        </div>
    )
}

export default Remaining;