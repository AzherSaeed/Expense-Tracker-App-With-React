import React , {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

function Balence() {
    const {transaction} = useContext(GlobalContext);

    const amounts = transaction.map(trans => trans.amount);
    const total = amounts.reduce((acc , item ) => (acc += item) , 0).toFixed(2)
    return (
        <>
            <h4>Your Balance <span>${total}</span></h4>
             
        </>
    )
}

export default Balence;