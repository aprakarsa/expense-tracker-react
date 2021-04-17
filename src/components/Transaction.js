import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({trx}) => {
    const sign = trx.amount < 0 ? '-' : '+';
    const border = trx.amount < 0 ? 'minus' : 'plus'

    const context = useContext(GlobalContext);
    const thousands_commas = context.thousands_separators;

    return (
        <li className={border}>
            {trx.text} 
            <span>{sign} ${thousands_commas(Math.abs(trx.amount))}</span>
            <button 
            className="delete-btn"
            onClick={() => context.deleteTransaction(trx.id)}
            >x</button>
        </li>
    )
}
