import React from "react";
import './NewExpenses.css';
import ExpenseForm from  './ExpenseForm.js';
const NewExpenses=(props)=>{

    const saveExpenseDataHandler=
        (enteredExpenseData)=>{

            const expenseData={
                ...enteredExpenseData,
                id:Math.random().toString() 
            }
            props.onAddExpense(expenseData);
            console.log(expenseData);
        };
     



        return(
            <div className="new-expenses">
                <form>
                    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
 





                </form>
    
            </div>

        );



}


export default NewExpenses;