import React, { useState } from 'react'

import { FormData } from './types'

type IncomeFormProps = {
  totalIncome: number;
  setTotalIncome: React.Dispatch<React.SetStateAction<number>>;
};

const IncomeForm = ({ totalIncome, setTotalIncome }: IncomeFormProps) =>
{
    const [income, setIncome] = useState<FormData>({
        source: '',
        amount: 0,
        date: '',
        id: 0,
    })

    

    const [incomeHistory, setIncomeHistory] = useState<FormData[]>([]);

    const handleIncomeChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setIncome((prevIncome) => ({ ...prevIncome, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newIncome: FormData = {
            ...income,
            id: Date.now() + Math.floor(Math.random() * 1000),
        };
        setIncomeHistory((prev) => [...prev, newIncome]);
        setIncome({
            source: '',
            amount: 0,
            date: '',
            id: 0,
        })
    };


    //sum amount to totalIncome then pass to parent 
    const total = incomeHistory.reduce((acc, income) => acc + Number(income.amount), 0);
    setTotalIncome(total);

    return (
      <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="incomeSource">Income source:</label>
            <input
                type="text"
                id="incomeSource"
                name="source"
                value={income.source}
                onChange={handleIncomeChange}
                required
            />
            <br />
            <label htmlFor="incomeAmount">Income amount:</label>
            <input
                type="number"
                id="incomeAmount"
                name="amount"
                value={income.amount}
                onChange={handleIncomeChange}
                required
            />
            <br />
            <label htmlFor="incomeDate">Date:</label>
            <input
                type="date"
                id="incomeDate"
                name="date"
                value={income.date}
                onChange={handleIncomeChange}
                required
            />
            <br />
            <button type="submit">Add Income</button>
        </form>
        {incomeHistory.map((income)=>(
            <li key={income.id}>
                {income.source},
                {income.amount} {' '}
                on: {income.date}
            </li>
        ))}
      </div>
    
  )
}

export default IncomeForm