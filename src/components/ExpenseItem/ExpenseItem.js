import ExpenseDate from 'components/ExpenseDate/ExpenseDate';
import Card from 'components/UI/Card';
import React, { useState } from 'react';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
	const [title, setTitle] = useState(props.title);
	const clickHandler = () => {
		setTitle('fsdasfadsfdais it working');
	};

	return (
		<li>
			<Card className='expense-item'>
				<ExpenseDate date={props.date} />
				<div className='expense-item__description'>
					<h1 className='expense-item__title'>{title}</h1>
					<div className='expense-item__price'>{props.amount}</div>
				</div>
			</Card>
		</li>
	);
};

export default ExpenseItem;
