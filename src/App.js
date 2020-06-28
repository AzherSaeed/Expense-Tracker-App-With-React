import React from 'react';
import Header from './components/Header';
import Balence from './components/Balence';
import incomeExpenses from './components/incomeExpenses'
import './App.css';

function App() {
  return (
    <div>
     <Header/>
     <Balence/>
     <incomeExpenses/>
    </div>
  );
}

export default App;
