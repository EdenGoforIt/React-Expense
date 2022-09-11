import Expenses from 'components/Expenses/Expenses';
import NewExpense from 'components/NewExpense/NewExpense';
import AuthContext, {
	AuthContextProvider,
} from 'components/store/auth-context';
import React, { useState } from 'react';
import './App.css';

function App() {
	const initialExpenses = [
		{
			id: Math.random(),
			title: 'Car 2',
			amount: 23.43,
			date: new Date(2019, 9, 9),
		},
		{
			id: Math.random(),
			title: 'Car 3',
			amount: 13.43,
			date: new Date(2022, 1, 9),
		},
		{
			id: Math.random(),
			title: 'Car',
			amount: 33.43,
			date: new Date(2019, 2, 9),
		},
		{
			id: Math.random(),
			title: 'Building',
			amount: 4.43,
			date: new Date(2020, 10, 1),
		},
		{
			id: Math.random(),
			title: 'Building',
			amount: 34.43,
			date: new Date(2020, 3, 1),
		},
		{
			id: Math.random(),
			title: 'What',
			amount: 55,
			date: new Date(2021, 11, 1),
		},
		{
			id: Math.random(),
			title: 'What',
			amount: 22,
			date: new Date(2021, 11, 1),
		},
	];
	const [expenses, setExpenses] = useState(initialExpenses);

	const addNewExpenseHandler = (data) => {
		setExpenses((prev) => {
			return [...prev, data];
		});
	};

	return (
		<AuthContextProvider>
			<div className='App'>
				<NewExpense onAddNewExpense={addNewExpenseHandler} />
				<Expenses items={expenses} />
			</div>
		</AuthContextProvider>
	);
}

export default App;
