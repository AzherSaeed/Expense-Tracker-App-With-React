import React, { useState , useContext } from 'react'
import {GlobalContext} from '../context/GlobalState';


export const AddTransaction = () => {
    const [Text, setText] = useState('')
    const [Amount, setAmount] = useState()

    const {addTransaction} = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id : Math.floor(Math.random() * 100000000),
            Text ,
            Amount : +Amount
        }

        addTransaction(newTransaction)
    }
    return (
        <>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text" >Text</label>
                    <input type="text" placeholder="Enter text..." 
                    value={Text} onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount" >Amount <br/>
                    (nagative - expense , positive - income)
                     </label>
                     <input type="number" placeholder="Enter amount"
                      value={Amount} onChange={(e) => setAmount(e.target.value)}
                     />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    )
}
