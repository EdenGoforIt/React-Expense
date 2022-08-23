import ExpenseItem from 'components/ExpenseItem/ExpenseItem';
import React from 'react';
import './ExpenseList.css';
const ExpenseList = (props) => {
	if (!props.items.length) {
		return <h2 className='expenses-list__fallback'>No expenses Found</h2>;
	}

	if (props.items.length) {
		return props.items.map((item, index) => (
			<ExpenseItem
				key={item.id}
				title={item.title}
				amount={item.amount}
				date={item.date}
			></ExpenseItem>
		));
	}

	return <ul className='expenses-list'></ul>;
};

export default ExpenseList;
