import React, { useState } from 'react'
import './ExpenseFilter.css'

const ExpenseFilter = ({ defaultYear, onFilterYearChange }) => {
    const [filterYear, setFilterYear] = useState(defaultYear)

    const onFilterSelectHandler = (event) => {
        const newFilterYear = event.target.value;
        setFilterYear(newFilterYear);
        onFilterYearChange(newFilterYear);
    }
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select onChange={onFilterSelectHandler} value={filterYear}>
                    <option value=""></option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter
