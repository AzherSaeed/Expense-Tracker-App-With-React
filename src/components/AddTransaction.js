import React from 'react'

export const AddTransaction = () => {
    
    return (
        <>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text" >Text</label>
                    <input type="text" placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount" >Amount <br/>
                    (nagative - expense , positive - income)
                     </label>
                     <input type="number" placeholder="Enter amount" />
                </div>
                <button>Add Transaction</button>
            </form>
        </>
    )
}