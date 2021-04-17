import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
    const context = useContext(GlobalContext);
    const thousands_commas = context.thousands_separators;
    
    const amount = context.transaction.map( trx => trx.amount)

    const income = thousands_commas(amount
        .filter( item => item > 0 )
        .reduce( (total, item) => (total += item), 0)
        .toFixed(2));
    const expense = thousands_commas(Math.abs(amount
        .filter( item => item < 0 )
        .reduce( (total, item) => (total += item), 0))
        .toFixed(2));

    return (
        <>
            <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p className="money plus">+${income}</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p className="money minus">-${expense}</p>
                </div>
            </div>
        </>
    )
}
