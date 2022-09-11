import './ExpenseForm.css';
import React, { useReducer, useState } from 'react';
import Button from 'components/UI/Button/Button';
import ErrorModal from 'components/UI/ErrorModal/ErrorModal';
import AuthContext from 'components/store/auth-context';

export const ACTIONS = {
	USER_INPUT: 'user-input',
	INPUT_BLUR: 'input-blur',
};

const userInputIsValid = (value) => {
	return value.trim().length > 0 && value.trim().length < 10;
};

const userInputReducer = (state, action) => {
	if (action.type === ACTIONS.USER_INPUT) {
		return {
			payload: action.payload,
			isValid: userInputIsValid(action.val),
		};
	}
	if (action.type === ACTIONS.INPUT_BLUR) {
		return { value: state.payload, isValid: userInputIsValid(state.value) };
	}

	return { payload: '', isValid: false };
};

const ExpenseForm = (props) => {
	const ctx = useContext(AuthContext);

	const [userInput, setUserInput] = useState({
		title: '',
		amount: '',
		date: '',
	});

	const [formIsValid, setFormIsValid] = useState(false);

	const [userInputState, dispatchUserInput] = useReducer(userInputReducer, {
		payload: {
			title: '',
			amount: '',
			date: '',
		},
		isValid: null,
	});

	const [error, setError] = useState({
		title: '',
		message: '',
		errorOccurred: false,
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

		if (
			!userInput.title.trim().length ||
			!userInput.amount.trim().length ||
			!userInput.date.trim().length
		) {
			setError((prev) => {
				return {
					...prev,
					title: 'Invalid Input',
					message: 'Please enter valid values',
					errorOccurred: true,
				};
			});

			return;
		}

		setError((prev) => ({ ...prev, errorOccurred: false }));

		const expenseData = {
			title: userInput.title,
			amount: +userInput.amount,
			date: new Date(userInput.date),
		};

		setUserInput((previousState) => {
			return {
				title: '',
				amount: '',
				date: '',
			};
		});

		props.onSaveExpenseData(expenseData);
	};

	const errorHandler = () => {
		setError((prev) => ({ ...prev, errorOccurred: false }));
	};

	return (
		<div>
			{error.errorOccurred && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<form onSubmit={submitHandler}>
				<div className='new-expense__controls'>
					<div className='new-expense__control'>
						<label>Title</label>
						<input
							type='text'
							value={userInputState.val.title}
							onChange={titleChangeHandler}
						/>
					</div>
					<div className='new-expense__control'>
						<label>Amount</label>
						<input
							type='number'
							value={userInputState.val.amount}
							onChange={amountChangeHandler}
							min='0.01'
							step='0.01'
						/>
					</div>
					<div className='new-expense__control'>
						<label>Date</label>
						<input
							type='date'
							value={userInputState.val.date}
							onChange={dateChangeHandler}
						/>
					</div>
				</div>
				<div className='new-expense__actions'>
					<Button type='submit'>Add Expense</Button>
					<Button type='button' onClick={props.onCancel}>
						Cancel
					</Button>
				</div>
			</form>
		</div>
	);
};

export default ExpenseForm;
