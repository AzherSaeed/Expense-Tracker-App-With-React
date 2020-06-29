import React , {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

function Balence() {
    const context = useContext(GlobalContext);

    const amounts = context.transaction.map(trans => trans.Amount);
    const total = amounts.reduce((acc , item ) => (acc += item) , 0).toFixed(2)
    return (
        <>
            <h4>Your Balance <span>${total}</span></h4>
             
        </>
    )
}

export default Balence;