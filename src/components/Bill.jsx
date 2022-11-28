import useContexApp from '../Context/useContextApp';

export default function Bill() {
	const { iconDollar } = useContexApp();

	return (
		<div className="bill">
			<label>Bill</label>

			<div className="bill_input">
				<img src={iconDollar} alt="icon dolar" />
				<input type="number" min={0} />
			</div>
		</div>
	);
}
