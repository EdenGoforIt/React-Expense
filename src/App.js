import Expenses from 'components/Expenses/Expenses';
import React from 'react';
import './App.css';

function App() {
	const expenses = [
		{ title: 'Car', amount: 2593.43, date: new Date(1999, 9, 9) },
		{ title: 'Building', amount: 2511193.43, date: new Date(1999, 10, 1) },
		{ title: 'What', amount: 432.43, date: new Date(2222, 10, 1) },
	];
	return (
		<div className='App'>
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
