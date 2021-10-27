import './ExpenseItem.css'
import React from 'react'

const ExpenseItem = () => {
    return (
        <div className="expense-item">
            <div>June 20th 2021</div>
            <div className="expense-item__description">
                <h2>Resturent Purchase</h2>
                <div className="expense-item__price">$ 28.23</div>
            </div>
        </div>
    )
}

export default ExpenseItem
