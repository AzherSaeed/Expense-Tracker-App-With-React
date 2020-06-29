import React from 'react';
import Header from './components/Header';
import Balence from './components/Balence';
import IncomeExpenses from './components/incomeExpenses'
import './App.css';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
     <Header/>
    <div className="container">
      <Balence/>
     <IncomeExpenses/>
     <TransactionList/>
     <AddTransaction/>
    </div>
    </GlobalProvider>
  );
}

export default App;
