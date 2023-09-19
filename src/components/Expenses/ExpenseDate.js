import './ExpenseDate.css';
import React from 'react';


function ExpenseDate(props){
    const month=props.date.toLocaleString('en-US',{month:'long'});
    const year=props.date.getFullYear();
    const day=props.date.toLocaleString('en-US',{day:'2-digit'});
    return(
        <div className="date-box">
            <div className="expense-item-date"> 
                <div className="expense-item-month">{month}</div>
                <div className="expense-item-year">{year}</div>
                <div className="expense-item-day">{day}</div>
            </div>

        </div>
    );

}
export default ExpenseDate;