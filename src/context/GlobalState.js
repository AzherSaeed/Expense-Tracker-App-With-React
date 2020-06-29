import React , { useReducer, createContext } from 'react';
import AppReducer from './AppReducer'

//Initial State

const initialState  = {
    transaction : [
        {id : 1 , text : 'Flower' , amount : -20},
        {id : 2 , text : 'Laptop' , amount : 50}
    ]
}

//create Context
export const GlobalContext = createContext(initialState)

//provider component

export const GlobalProvider = ({children}) => {
    const [state , dishpatch ] = useReducer(AppReducer , initialState);

return (
    <GlobalContext.Provider value={{transaction : state.transaction}} >
        {children}
    </GlobalContext.Provider>
)
}