import useContexApp from '../Context/useContextApp';

export default function Result() {
	const { reset, result } = useContexApp();
	const { tipAmount, totalPerson } = result;

	return (
		<div className="result">
			<div className="result_amoutns">
				<div className="tip_amount">
					<div className="tip_amount_description">
						<p>Tip Amout</p>
						<p>/ person</p>
					</div>

					<div className="tip_amount_result">
						<p>${tipAmount ? tipAmount : '0.00'}</p>
					</div>
				</div>

				<div className="total">
					<div className="total_description">
						<p>Total</p>
						<p>/ person</p>
					</div>

					<div className="total_result">
						<p>${totalPerson ? totalPerson : '0.00'}</p>
					</div>
				</div>
			</div>

			<button className="reset" onClick={reset}>
				Reset
			</button>
		</div>
	);
}
