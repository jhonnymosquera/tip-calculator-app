import { Context } from './Context';
import iconDollar from '../../public/icon-dollar.svg';
import iconPerson from '../../public/icon-person.svg';
import { useState, useEffect } from 'react';

function ContextProvider({ children }) {
	const values = {
		bill: '',
		selecTip: '',
		numberOfPeople: '',
	};

	const [value, setValue] = useState(values);

	useEffect(() => {
		setValue(value);
	}, [value]);

	const handlerInputValue = (e) => {
		let handler = {
			...value,
			[e.target.name]: e.target.value,
		};

		setValue(handler);
	};

	const handlerbuttonValue = (e) => {
		let str = e.target.innerText;
		str = str.substr(0, str.length - 1);

		let handler = {
			...value,
			selecTip: str,
		};

		setValue(handler);
	};

	const reset = () => {
		setValue(values);
	};

	console.log(value);
	return (
		<Context.Provider
			value={{
				iconDollar,
				iconPerson,
				value,
				handlerInputValue,
				handlerbuttonValue,
				reset,
			}}
		>
			{children}
		</Context.Provider>
	);
}

export default ContextProvider;
