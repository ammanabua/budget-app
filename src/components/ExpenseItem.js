import React from 'react';
import { TiDelete } from 'react-icons/ti';
import Naira from 'react-naira';


const ExpenseItem = (props) => {
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {props.name}
            <div>
                <span className='badge badge-primary badge-pill mr-3'>
                    <Naira>{props.cost}</Naira>
                </span>
                <TiDelete size='1.5em'></TiDelete>
            </div>
        </li>
    )
}

export default ExpenseItem;