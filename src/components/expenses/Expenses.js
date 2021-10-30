import React, {useState} from 'react'
import './Expenses.css'
import Card from '../utils/Card'

import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

const Expense = ({ expenses }) => {
    const [filterYear, setFilterYear] = useState('')

    const handleFilterYearChange = (newYear) => {
        setFilterYear(newYear)
    }

    const filterView = expenses.filter(expense => filterYear === '' || filterYear == expense.date.getFullYear().toString())

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter defaultYear='' onFilterYearChange={handleFilterYearChange}/>
                <ExpensesList items={filterView}/>
            </Card>
        </div>
    )
}

export default Expense
//{ filterView.length === 0 ? <p>No expenses for the filter criteria.</p> : filterView.filter(expense => expense.show).map(expense => <ExpenseItem key={expense.id} date={expense.date} title={expense.title} amount={expense.amount} />) }