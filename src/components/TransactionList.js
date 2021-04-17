import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
    const context = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {context.transaction.map( trx => ( 
                    <Transaction 
                        key={trx.id} 
                        trx={trx} 
                    />
                ) )}
                
            </ul>
        </>
    )
}
