import React from 'react';
import Header from './components/Header';
import Balence from './components/Balence';
import IncomeExpenses from './components/incomeExpenses'
import './App.css';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

function App() {
  return (
    <div>
     <Header/>
     <Balence/>
     <IncomeExpenses/>
     <TransactionList/>
     <AddTransaction/>
    
    </div>
  );
}

export default App;
