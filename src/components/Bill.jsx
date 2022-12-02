import useContexApp from '../Context/useContextApp';

export default function Bill() {
	const { iconDollar, value, handlerInputValue } = useContexApp();

	return (
		<div className="bill">
			<label>Bill</label>

			<div className="bill_input">
				<img src={iconDollar} alt="icon dolar" />
				<input
					type="number"
					placeholder="0"
					min={0}
					value={value.bill}
					name="bill"
					onChange={handlerInputValue}
				/>
			</div>
		</div>
	);
}
