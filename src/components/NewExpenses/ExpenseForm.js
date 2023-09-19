import React from "react";
import './ExpenseForm.css';
import { useState } from "react";
const ExpenseForm=(props)=>{ 
    

    const[enteredTitle,setEnteredTitle]=useState();
    const[enteredAmount,setEnteredAmount]=useState();
    const[enteredDate,setEnteredDate]=useState();
 
    const titlechangeHandler=(event)=>{
        setEnteredTitle(event.target.value);

    };
    const amountchangeHandler=(event)=>{
        setEnteredAmount(event.target.value);

    };
    const datechangeHandler=(event)=>{
        setEnteredDate(event.target.value); 

    };
    const submitHandler=(event)=>{
        event.preventDefault();  
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        } 
        props.onSaveExpenseData(expenseData);
        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        

    };
    return(
        <form >
        <div className="new-expense-controls">
                <div className="new-expense-control">
                    <label>
                        Title
                    </label>
                    <input type="text" value={enteredTitle} onChange={titlechangeHandler}/>
                </div>
                <div className="new-expense-control">
                <label>
                    Amount
                </label>
                <input type="numbers" value={enteredAmount} onChange={amountchangeHandler}/>
                </div>
                <div className="new-expense-control">
                <label>
                    Date
                </label>
                <input type="date"  value={enteredDate} onChange={datechangeHandler}/>
                </div>
                <div className="new-expense-actions">
                    <button onClick={submitHandler}>Add Expense</button>
                </div>

 

            </div>
        </form>
    );
}
export default ExpenseForm;