import React, { useState } from 'react'
import './App.css';
import Expenses from './components/expenses/Expenses';
import NewExpense from './components/newexpense/NewExpense';

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
    show: true,
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12), show: true, },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
    show: true,
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
    show: true,
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)
  const [showForm, setShowForm] = useState(false)

  const addToExpenses = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses])
  }
  const updateExpenses = (expenses) => {
    setExpenses(expenses)
  }

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm)
  }

  const showCharacter = showForm ? '\u2750' : '\u274F'
  const hoverText = showForm ? 'Close Form' : 'Add Expense'
  return (
    <div className="App">
      <h1>Expense Tracker <button onClick={toggleForm} title={hoverText}>{showCharacter}</button></h1>
      {showForm && <NewExpense addToExpenses={addToExpenses} />}
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
