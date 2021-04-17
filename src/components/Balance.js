import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    const context = useContext(GlobalContext);
    const thousands_commas = context.thousands_separators;

    const balance = thousands_commas(context.transaction
        .reduce( (total, trx) => total + trx.amount, 0 )
        .toFixed(2));

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${balance}</h1>
        </>
    )
}
