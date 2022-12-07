import { VALUE_TYPES } from './actions';

export const initialValues = {
	bill: '',
	selecTip: '',
	selecTipCustom: '',
	numberOfPeople: '',
};

export function valueReducer(value, action) {
	let e = action.payload;

	switch (action.type) {
		case VALUE_TYPES.VALUE:
			return value;

		case VALUE_TYPES.BILL_PEOPLE:
			let eValue = e.target.value;
			let eName = e.target.name;

			if (eValue > 0) {
				if (eName === 'bill') {
					eValue = parseFloat(eValue);
				} else {
					eValue = parseInt(eValue);
				}

				return { ...value, [eName]: eValue };
			} else {
				return { ...value, [eName]: '' };
			}

		case VALUE_TYPES.ST:
			let ST = e.target.textContent;
			ST = ST.substr(0, ST.length - 1);

			return {
				...value,
				selecTip: parseInt(ST),
				selecTipCustom: '',
			};

		case VALUE_TYPES.STC:
			if (e.target.value > 0) {
				return {
					...value,
					selecTip: '',
					selecTipCustom: parseInt(e.target.value),
				};
			} else {
				return {
					...value,
					selecTip: '',
					selecTipCustom: '',
				};
			}

		case VALUE_TYPES.RESET:
			return { ...value, ...initialValues };

		default:
			return value;
	}
}
