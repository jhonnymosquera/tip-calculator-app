const tips = [5, 10, 15, 25, 50];

export default function SelectTip() {
	return (
		<div className="select_tip">
			<label>Select Tip %</label>

			<div className="tips">
				{tips.map((tip) => {
					return <button>{tip}%</button>;
				})}
				<input type="number" min={0} value={0} />
			</div>
		</div>
	);
}
