import Expenses from 'components/Expenses/Expenses';
import NewExpense from 'components/NewExpense/NewExpense';
import React, { useState } from 'react';
import './App.css';

function App() {
	const initialExpenses = [
		{
			id: Math.random(),
			title: 'Car',
			amount: 2593.43,
			date: new Date(2019, 9, 9),
		},
		{
			id: Math.random(),
			title: 'Building',
			amount: 2511193.43,
			date: new Date(2020, 10, 1),
		},
		{
			id: Math.random(),
			title: 'What',
			amount: 432.43,
			date: new Date(2021, 10, 1),
		},
	];
	const [expenses, setexpenses] = useState(initialExpenses);

	const addNewExpenseHandler = (data) => {
		setexpenses((prev) => {
			return [...prev, data];
		});
	};
	return (
		<div className='App'>
			<NewExpense onAddNewExpense={addNewExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
