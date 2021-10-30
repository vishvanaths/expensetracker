import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = ({ items }) => {

    if (items.length === 0) {
        return (<h2 className='expenses-list__fallback'>No expenses for the selection.</h2>)
    } else {
        return (
            <ul className='expenses-list'>
                {items.map(expense => <ExpenseItem key={expense.id} date={expense.date} title={expense.title} amount={expense.amount} />)}
            </ul>
        )
    }

}

export default ExpensesList
