import Button from 'components/UI/Button/Button';
import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);
	const saveExpenseDataHandler = (data) => {
		const expenseData = {
			...data,
			id: Math.random().toString(),
		};
		props.onAddNewExpense(expenseData);
	};

	const startEditingHandler = () => {
		setIsEditing((prevState) => {
			return !prevState;
		});
	};
	return (
		<div className='new-expense'>
			{!isEditing && (
				<Button onClick={startEditingHandler}>Add New Expense</Button>
			)}

			{isEditing && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancel={startEditingHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;
