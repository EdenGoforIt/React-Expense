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

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter
					onDropdownChange={onExpenseFilterChange}
					selected={filteredYear}
				/>
				{props.items.map((item, index) => (
					<ExpenseItem
						key={item.id}
						title={item.title}
						amount={item.amount}
						date={item.date}
					></ExpenseItem>
				))}
			</Card>
		</div>
	);
};
export default Expenses;
