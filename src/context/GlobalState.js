import React , { useReducer, createContext } from 'react';
import AppReducer from './AppReducer'

//Initial State

const initialState  = {
    transaction : []
}

//create Context
export const GlobalContext = createContext(initialState)

//provider component

export const GlobalProvider = ({children}) => {
    const [state , dispatch ] = useReducer(AppReducer , initialState);

//Action
function deleteTransaction(id) {
    dispatch ({
        type : 'DELETE_TRANSACTION',
        payload : id
    })
}
function addTransaction(transaction) {
    dispatch ({
        type : 'ADD_TRANSACTION',
        payload : transaction
    })
}

return (
    <div>
        <GlobalContext.Provider value={{transaction : state.transaction
    , deleteTransaction  , addTransaction
    }} >
        {children}
    </GlobalContext.Provider>
    </div>
)
}