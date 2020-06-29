import React , {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

 const IncomeExpenses = () => {
    const {transaction} = useContext(GlobalContext);

    const amounts = transaction.map(trans => trans.amount)
    const income = amounts
    .filter(item => item > 0)
    .reduce((acc , item) => (acc += item) , 0)
    .toFixed(2)

    const expense = (
        amounts.filter(item => item < 0).reduce((acc , item) => (acc += item) , 0) * -1
    ).toFixed(2)
    return (
        <div>
            <div className="inc-exp-container">
                <h4>Income</h4>
    <p class="money plus" >{income}</p>
            </div>
            <div>
                <h4>Expenses</h4>
    <p className="money minus" >{expense}</p>
            </div>
        </div>
    )
}
export default IncomeExpenses;
