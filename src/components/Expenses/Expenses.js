import ExpensesFilter from 'components/ExpenseFilter/ExpensesFilter';
import Card from 'components/UI/Card';
import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2020');

	const onExpenseFilterChange = (year) => {
		setFilteredYear(year);
	};

	const filteredExpenses = props.items.filter(
		(x) => x.date.getFullYear().toString() === filteredYear
	);

	let content = (
		<p className='text-center' style={{ color: 'white' }}>
			No expenses Found
		</p>
	);

	if (filteredExpenses.length) {
		content = filteredExpenses.map((item, index) => (
			<ExpenseItem
				key={item.id}
				title={item.title}
				amount={item.amount}
				date={item.date}
			></ExpenseItem>
		));
	}

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter
					onDropdownChange={onExpenseFilterChange}
					selected={filteredYear}
				/>
				{content}
			</Card>
		</div>
	);
};
export default Expenses;
