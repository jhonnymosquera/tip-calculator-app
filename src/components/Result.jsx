import useContexApp from '../Context/useContextApp';

export default function Result() {
	const { iconDollar, reset } = useContexApp();

	return (
		<div className="result">
			<div className="tip_amount">
				<div className="tip_amount_description">
					<p>Tip Amout</p>
					<p>/ person</p>
				</div>

				<div className="tip_amount_result">
					<p>${0}</p>
				</div>
			</div>

			<div className="total">
				<div className="total_description">
					<p>Total</p>
					<p>/ person</p>
				</div>

				<div className="total_result">
					<p>${0}</p>
				</div>
			</div>

			<button
				className="reset"
				onClick={() => {
					reset();
				}}
			>
				Reset
			</button>
		</div>
	);
}
