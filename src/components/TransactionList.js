import React , {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import {Transaction} from './Transaction'

export const TransactionList = () => {

     const context = useContext(GlobalContext)

     console.log(context)
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {context.transaction.map(trans => (<Transaction key={trans.id} trans={trans} />)) }
            </ul>
        </>
    )
}
