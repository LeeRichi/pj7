import React, { useState } from 'react'
import { FormData } from './types'

type ExpenseFormProps = {
  totalExpense: number;
  setTotalExpense: React.Dispatch<React.SetStateAction<number>>;
};

const ExpenseForm = ({totalExpense, setTotalExpense}: ExpenseFormProps) =>
{
    const [expense, setExpense] = useState<FormData>({
        source: '',
        amount: 0,
        date: '',
        id: 0,
    })
    
    const [expenseHistory, setExpenseHistory] = useState<FormData[]>([])

    const HandleExpenseChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    {
        const { name, value } = e.target;
        setExpense((prev) => ({...prev, [name]: value}))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newExpense: FormData = {
            ...expense,
            id: Date.now() + Math.floor(Math.random() * 1000),
        };
        setExpenseHistory((prev) => [...prev, newExpense]);
        setExpense({
            source: '',
            amount: 0,
            date: '',
            id: 0,
        })
    };

    //sum amount to totalexpense then pass to parent 
    // numberOfAmount = number(expense.amount)
    const total = expenseHistory.reduce((acc, expense) => acc + Number(expense.amount), 0);
    setTotalExpense(total);



  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='expenseSource'>Expsense source: </label>
            <input
                type="text"
                id="expenseSource"
                name="source"
                value={expense.source}
                onChange={HandleExpenseChange}
                required
              />
            <br />
            <label htmlFor="incomeAmount">Income amount:</label>
            <input
                type="number"
                id="expenseAmount"
                name="amount"
                value={expense.amount}
                onChange={HandleExpenseChange}
                required
            />
            <br />
            <label htmlFor="incomeDate">Date:</label>
            <input
                type="date"
                id="expenseDate"
                name="date"
                value={expense.date}
                onChange={HandleExpenseChange}
                required
            />
            <br />
            <button type="submit">Add expenses</button>
          </form>
          {expenseHistory.map((expense) => (
            <li key={expense.id}>
                {expense.source},
                {expense.amount} {' '}
                on: {expense.date}
            </li>
          ))} 
    </div>
  )
}

export default ExpenseForm