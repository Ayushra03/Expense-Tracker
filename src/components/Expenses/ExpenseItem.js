import './ExpenseItem.css';
import ReactDom from 'react-dom';

import React from 'react';
import {useState} from 'react' 
import ExpenseDate from './ExpenseDate';
const  ExpenseItem = (props) =>{
    
  
    


    

    return(
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
         
            <div className="expense-item-desc">
                <h2>{props.title}</h2>
                <div className="expense-item-price">${props.amount}</div>
            </div>
         
 


        </div>
    );
}
export default ExpenseItem;