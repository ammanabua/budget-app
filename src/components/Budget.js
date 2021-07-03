import React, { useContext } from 'react';
import Naira from 'react-naira';
import { AppContext } from '../context/AppContext';


const Budget = () =>  {

    const { budget } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: <Naira>{budget}</Naira></span>
        </div>
    )
}

export default Budget;