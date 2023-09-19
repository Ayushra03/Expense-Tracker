import './App.css'
import Expenses from './components/Expenses/Expenses.js';
import React from 'react';
import ReactDom from 'react-dom';
import NewExpenses from './components/NewExpenses/NewExpenses.js';
import { useState } from 'react';
let DummyExpense=[

];

const App=()=>{
    const[expenses,setExpenses]= useState(DummyExpense);
  
const addExpenseHandler=(expense)=>{

    setExpenses([expense,...expenses])
} 
    return(
    <div>
        <div className=" heading">
            <h2>Hello !! USER Let's get started</h2>

        </div>
        <NewExpenses onAddExpense={addExpenseHandler}/>
        <Expenses item={expenses}/>
        
     

     
    </div>
    );
}
export default App;