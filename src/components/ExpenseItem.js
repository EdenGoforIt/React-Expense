import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-item__description'>
				<h1 className='expense-item__title'>{props.title}</h1>
				<div className='expense-item__price'>{props.amount}</div>
			</div>
		</Card>
	);
}

export default ExpenseItem;
