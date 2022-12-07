import { RESULT_TYPES } from './actions';

export const initialResult = {
	tipAmount: null,
	totalPerson: null,
};

export function resultReducer(result, action) {
	switch (action.type) {
		case RESULT_TYPES.TA:
			const { bill, selecTip, selecTipCustom, numberOfPeople } = action.value;
			let selec = selecTip != '' ? selecTip : selecTipCustom;
			const amount = bill * (selec / 100);

			if ((bill && numberOfPeople) > 0 && (selecTip || selecTipCustom) > 0) {
				const tip = amount / numberOfPeople;
				const tipAmount = parseFloat(tip).toFixed(2);

				const total = (amount + bill) / numberOfPeople;
				const totalPerson = parseFloat(total).toFixed(2);

				if ((tip || total) == Infinity || NaN) {
					return {
						...result,
						...initialResult,
					};
				} else {
					return {
						...result,
						tipAmount,
						totalPerson,
					};
				}
			}

		case RESULT_TYPES.RESET:
			return initialResult;

		default:
			return result;
	}
}
