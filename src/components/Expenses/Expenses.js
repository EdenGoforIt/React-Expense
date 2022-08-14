import Card from 'components/UI/Card';
import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
	return (
		<Card className='expenses'>
			{props.items.map((item, index) => (
				<ExpenseItem
					key={index}
					title={item.title}
					amount={item.amount}
					date={item.date}
				></ExpenseItem>
			))}
		</Card>
	);
};
export default Expenses;
