import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [newTitle, setTitle] = useState('')
    const [newAmount, setAmount] = useState('')
    const [newDate, setDate] = useState('')

    const onTitleChangeHandler= (event) => setTitle((prevTitle) => event.target.value)
    const onAmountChangeHandler= (event) => setAmount((prevAmount) => event.target.value)
    const onDateChangeHandler= (event) => setDate((prevDate) => event.target.value)

    const onSubmitHandler = (event) => {
        event.preventDefault()
        const newExpense = {id : Math.random() * 100, title : newTitle, amount : newAmount, date : new Date(newDate) }
        props.addExpense(newExpense);
        setTitle('')
        setAmount('')
        setDate('')
    }
    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'><label>Title</label><input type='text' value={newTitle} onChange={onTitleChangeHandler}/></div>
                <div className='new-expense__control'><label>Price</label><input type='number' min='0.01' step='0.01' value={newAmount} onChange={onAmountChangeHandler}/></div>
                <div className='new-expense__control'><label>Date</label><input type='date'  value={newDate} onChange={onDateChangeHandler}/></div>
                <div className='new-expense__actions'><button type='submit' onClick={onSubmitHandler}>Add Expense</button></div>
            </div>
        </form>
    )
}

export default ExpenseForm
