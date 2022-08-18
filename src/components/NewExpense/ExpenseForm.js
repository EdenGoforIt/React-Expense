import './ExpenseForm.css';
import React, { useState } from 'react';

const ExpenseForm = (props) => {
	const [userInput, setUserInput] = useState({
		title: '',
		amount: '',
		date: '',
	});
	const titleChangeHandler = (event) => {
		setUserInput((previousState) => {
			return {
				...previousState,
				title: event.target.value,
			};
		});
	};

	const amountChangeHandler = (event) => {
		setUserInput((previousState) => {
			return {
				...previousState,
				amount: event.target.value,
			};
		});
	};

	const dateChangeHandler = (event) => {
		setUserInput((previousState) => {
			return {
				...previousState,
				date: event.target.value,
			};
		});
	};

	const submitHandler = (event) => {
		//as by default it's trying to send the request to the server
		event.preventDefault();

		const expenseDate = {
			title: userInput.title,
			amount: userInput.amount,
			date: new Date(userInput.date),
		};

		setUserInput((previousState) => {
			return {
				title: '',
				amount: '',
				date: '',
			};
		});

		props.onSaveExpenseData(expenseDate);
	};

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						type='text'
						value={userInput.title}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='number'
						value={userInput.amount}
						onChange={amountChangeHandler}
						min='0.01'
						step='0.01'
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						value={userInput.date}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
