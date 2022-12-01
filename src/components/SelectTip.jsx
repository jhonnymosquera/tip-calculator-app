const tips = [5, 10, 15, 25, 50];

export default function SelectTip() {
	return (
		<div className="select_tip">
			<label>Select Tip %</label>

			<div className="tips">
				{tips.map((tip) => {
					return <div className="tip">{tip}%</div>;
				})}
				<input type="number" placeholder="Custom" min={0} />
			</div>
		</div>
	);
}
