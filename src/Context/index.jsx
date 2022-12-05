import { Context } from './Context';
import iconDollar from '../../public/icon-dollar.svg';
import iconPerson from '../../public/icon-person.svg';
import { useState, useEffect, useRef } from 'react';

function ContextProvider({ children }) {
	const initialValues = {
		bill: '',
		selecTip: '',
		selecTipCustom: '',
		numberOfPeople: '',
	};

	const [value, setValue] = useState(initialValues);

	const handlerInputValue = (e) => {
		const eName = e.target.name;
		const eValue = e.target.value;
		const parseValue = eName === 'bill' ? parseFloat(eValue) : parseInt(eValue);

		if (e.target.value.length > 0) {
			let handler = {
				...value,
				[eName]: parseValue,
			};

			setValue(handler);
		} else {
			let handler = {
				...value,
				[eName]: '',
			};

			setValue(handler);
		}
	};

	const handerCustom = (e) => {
		let handler = {
			...value,
			selecTip: '',
			selecTipCustom: parseInt(e.target.value),
		};

		setValue(handler);
		removeActive();
	};

	const handlerbuttonValue = (e) => {
		let str = e.target.innerText;
		str = str.substr(0, str.length - 1);

		let handler = {
			...value,
			selecTip: parseInt(str),
			selecTipCustom: '',
		};

		setValue(handler);
	};

	const reset = () => {
		setValue(initialValues);
		removeActive();
		reusltReset();
	};

	// result
	const { bill, selecTip, selecTipCustom, numberOfPeople } = value;
	const [tipAmountResult, setTipAmountResult] = useState(null);
	const [totalPersonResult, setTotalPersonResult] = useState(null);

	let selec = selecTip != '' ? selecTip : selecTipCustom;
	const amount = bill * (selec / 100);

	const tipAmoutPerson = () => {
		if (numberOfPeople != '') {
			const tip = amount / numberOfPeople;
			const tipAmount = parseFloat(tip).toFixed(2);
			if (tip == Infinity || NaN) {
				setTipAmountResult(null);
			} else {
				console.log(tip);
				setTipAmountResult(tipAmount);
			}
		}
	};

	const totalPersonAmout = () => {
		const total = (amount + bill) / numberOfPeople;
		const totalPerson = parseFloat(total).toFixed(2);
		if (total == Infinity || NaN) {
			setTotalPersonResult(null);
		} else {
			setTotalPersonResult(totalPerson);
		}
	};

	const reusltReset = () => {
		setTipAmountResult(null);
		setTotalPersonResult(null);
	};

	// selec tip active

	const tipsRef = useRef();
	const active = 'tip_active';
	const removeActive = () => {
		const tips = tipsRef.current.childNodes;
		tips.forEach((tip) => {
			tip.classList.remove(active);
		});
	};

	const tipTarget = (e) => {
		removeActive();

		e.target.classList.add(active);
	};

	// useEffect

	useEffect(() => {
		setValue(value);
		if (bill != '') {
			tipAmoutPerson();
			totalPersonAmout();
		} else {
			reusltReset();
		}
	}, [value]);

	return (
		<Context.Provider
			value={{
				iconDollar,
				iconPerson,
				value,
				handlerInputValue,
				handlerbuttonValue,
				handerCustom,
				reset,
				tipsRef,
				tipTarget,
				tipAmountResult,
				totalPersonResult,
			}}
		>
			{children}
		</Context.Provider>
	);
}

export default ContextProvider;
