import { ERROR_TYPES } from './actions';

export function errorReducer(state, action) {
	const {
		errorBill,
		errorBillSpan,
		errorSelectSpan,
		errorNumberOfPeople,
		errorNumberOfPeopleSpan,
		tipsRef,
	} = state;

	function error(error, condition) {
		let classList = error.current.classList;
		const active = 'errorActive';

		if (condition) {
			classList.add(active);
		} else {
			classList.remove(active);
		}
	}

	function removeActive() {
		const tips = tipsRef.current.childNodes;

		tips.forEach((tip) => {
			tip.classList.remove('tip_active');
		});
	}

	switch (action.type) {
		case ERROR_TYPES.ERROR:
			const { bill, selecTip, selecTipCustom, numberOfPeople } = action.value;

			let billCondition = bill < 1 && (selecTip || selecTipCustom) > 0 && numberOfPeople > 0;
			error(errorBill, billCondition);
			error(errorBillSpan, billCondition);

			let selectCondition = bill > 0 && (selecTip || selecTipCustom) < 1 && numberOfPeople > 0;
			error(errorSelectSpan, selectCondition);

			let peopleCondition = bill > 0 && (selecTip || selecTipCustom) > 0 && numberOfPeople < 1;
			error(errorNumberOfPeople, peopleCondition);
			error(errorNumberOfPeopleSpan, peopleCondition);

			return state;

		case ERROR_TYPES.TIPS_REMOVE:
			removeActive();
			return state;

		case ERROR_TYPES.TIP_TARGET:
			removeActive();

			action.e.target.classList.add('tip_active');
			return state;

		default:
			return state;
	}
}
