import React , {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
export const Transaction = ({trans}) => {

    const {deleteTransaction} = useContext(GlobalContext)

    const sign = trans.amount < 0 ? '-' : '+';
    return (
        <div>
            <li className={trans.amount < 0 ? 'minus' : 'plus'}>
    {trans.text}<span>{sign} $ {Math.abs(trans.amount)}</span>
                    <button onClick={() => deleteTransaction(trans.id)} className="delete-btn" >X</button>
                </li>
        </div>
    )
}
