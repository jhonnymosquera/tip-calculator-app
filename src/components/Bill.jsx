import useContexApp from '../Context/useContextApp';

export default function Bill() {
	const { iconDollar, value, valueDispatch, VALUE_TYPES, error } = useContexApp();
	const { errorBill, errorBillSpan } = error;

	return (
		<div className="bill">
			<div className="detail">
				<label>Bill</label>
				<span ref={errorBillSpan} className="error">
					Cant't be zero
				</span>
			</div>

			<div ref={errorBill} className="bill_input">
				<img src={iconDollar} alt="icon dolar" />
				<input
					type="number"
					placeholder="0"
					min={0}
					value={value.bill}
					name="bill"
					onChange={(e) => {
						valueDispatch({
							type: VALUE_TYPES.BILL_PEOPLE,
							payload: e,
						});
					}}
				/>
			</div>
		</div>
	);
}
