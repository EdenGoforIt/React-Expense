import Chart from 'components/Chart/Chart';
import ExpenseChart from 'components/ExpenseChart/ExpenseChart';
import ExpensesFilter from 'components/ExpenseFilter/ExpensesFilter';
import ExpenseList from 'components/ExpenseList/ExpenseList';
import Card from 'components/UI/Card';
import React, { useState } from 'react';
import './Expenses.css';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2020');

	const onExpenseFilterChange = (year) => {
		setFilteredYear(year);
	};

	const filteredExpenses = props.items.filter(
		(x) => x.date.getFullYear().toString() === filteredYear
	);

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter
					onDropdownChange={onExpenseFilterChange}
					selected={filteredYear}
				/>
				<ExpenseChart expenses={filteredExpenses} />
				<ExpenseList items={filteredExpenses} />
			</Card>
		</div>
	);
};
export default Expenses;
