import React from 'react'

export const Transaction = ({trans}) => {
    const sign = trans.amount < 0 ? '-' : '+';
    return (
        <div>
            <li className="minus">
    {trans.text}<span>{sign} $ {trans.amount}</span>
                    <button className="delete-btn" >X</button>
                </li>
        </div>
    )
}
