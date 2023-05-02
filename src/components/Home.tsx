import React, { useState, useEffect } from 'react'
// import {FormData} from './types'


import IncomeForm from './IncomeForm';
import ExpenseForm from './ExpenseForm';
import Saving from './Saving'

const Home = () =>
{
    const [totalIncome, setTotalIncome] = useState<number>(0);
    const [totalExpense, setTotalExpense] = useState<number>(0);
    const [balance, setBalance] = useState<number>(0);
    const [transferAmount, setTransferAmount] = useState<number>(0);
    const [savings, setSavings] = useState<number>(0);


    const TotalBalance = totalIncome - totalExpense;

    useEffect(() => {
      setBalance(TotalBalance)
    }, [totalIncome, totalExpense])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTransferAmount(Number(event.target.value));
    };
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>
    {
        event.preventDefault();
        setSavings(prevSavings => prevSavings + transferAmount);
        setBalance(prevBalance => prevBalance - transferAmount);
    }


  return (
    <>
        <IncomeForm totalIncome={totalIncome} setTotalIncome={setTotalIncome} />
        <ExpenseForm totalExpense={totalExpense} setTotalExpense={setTotalExpense} />
        <br />
        Current Balance: {balance}
          <form onSubmit={handleSubmit}>
            <p>Transfer to saving account</p>
            <input
                type="number"
                id="balance"
                name="balance"
                value={transferAmount}
                onChange={handleChange}
                required
            />
            <button type="submit">Transfer</button>
          </form>
          {/* saving: {savings} */}
        
          <Saving savings={savings} setSavings={setSavings} />
    </>
  )
}

export default Home