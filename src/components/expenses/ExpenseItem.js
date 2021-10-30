import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../utils/Card'
import React, { useState } from 'react'

const ExpenseItem = (props) => {
    const [editTitle, setEditTitle] = useState(true)
    const [title, setTitle] = useState(props.title)

    const editTitleHandler = () => {
        setEditTitle(!editTitle)
        console.log(editTitle)
    }

    const setTitleBlur = (e) => {
        setTitle(e.target.value)
        setEditTitle(!editTitle)
    }
    const setTitleHandler = (e) => {
        if (e.keyCode === 13) {
            setTitle(e.target.value)
            setEditTitle(!editTitle)
        }
    }
    return (
        <li>
        <Card className='expense-item'> 
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                {editTitle ? <h2 onClick={editTitleHandler}>{title}</h2> : <input type='text' defaultValue={title} onBlur={setTitleBlur} onKeyDown={setTitleHandler} />}
                <div className="expense-item__price">$ {props.amount}</div>
            </div>
        </Card>
        </li>
    )
}

export default ExpenseItem
