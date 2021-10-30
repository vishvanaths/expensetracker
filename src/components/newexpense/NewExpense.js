import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = ({addToExpenses}) => {
    return (
        <div className='new-expense'>
            <ExpenseForm addExpense={addToExpenses}/>
        </div>
    )
}

export default NewExpense
