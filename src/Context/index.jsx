import { Context } from './Context';
import iconDollar from '../assets/icons/icon-dollar.svg';
import iconPerson from '../assets/icons/icon-person.svg';
import logo from '../assets/icons/logo.svg';

import { useEffect, useRef, useReducer } from 'react';
import { VALUE_TYPES, ERROR_TYPES, RESULT_TYPES } from '../reducers/actions';
import { initialValues, valueReducer } from '../reducers/valueReducer';
import { initialResult, resultReducer } from '../reducers/resultReducer';
import { errorReducer } from '../reducers/errorReducer';

function ContextProvider({ children }) {
	// reducers
	const errorRefs = {
		errorBill: useRef(),
		errorBillSpan: useRef(),
		errorSelectSpan: useRef(),
		errorNumberOfPeople: useRef(),
		errorNumberOfPeopleSpan: useRef(),
		tipsRef: useRef(),
	};
	const [error, errorDispatch] = useReducer(errorReducer, errorRefs);
	const [value, valueDispatch] = useReducer(valueReducer, initialValues);
	const [result, resultDispatch] = useReducer(resultReducer, initialResult);

	// reset
	const reset = () => {
		valueDispatch({ type: VALUE_TYPES.RESET });
		errorDispatch({ type: ERROR_TYPES.TIPS_REMOVE });
		reusltReset();
	};

	const reusltReset = () => {
		resultDispatch({ type: RESULT_TYPES.RESET });
	};

	// useEffect

	useEffect(() => {
		valueDispatch({ type: VALUE_TYPES.VALUE });
		resultDispatch({ value });
		errorDispatch({ type: ERROR_TYPES.ERROR, value });

		if (value.bill != '') {
			resultDispatch({ type: RESULT_TYPES.TA, value });
		} else {
			reusltReset();
		}
	}, [value]);

	return (
		<Context.Provider
			value={{
				logo,
				iconDollar,
				iconPerson,
				value,
				valueDispatch,
				VALUE_TYPES,
				error,
				errorDispatch,
				ERROR_TYPES,
				reset,
				result,
			}}
		>
			{children}
		</Context.Provider>
	);
}

export default ContextProvider;
