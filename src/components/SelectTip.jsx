import useContexApp from '../Context/useContextApp';

const tips = [5, 10, 15, 25, 50];

export default function SelectTip() {
	const { handlerInputValue, handlerbuttonValue, value } = useContexApp();

	return (
		<div className="select_tip">
			<label>Select Tip %</label>

			<div className="tips">
				{tips.map((tip, i) => {
					return (
						<div key={i} className="tip" onClick={handlerbuttonValue}>
							{tip}%
						</div>
					);
				})}

				<input
					type="number"
					placeholder="Custom"
					name="selecTip"
					min={0}
					value={value.selecTip}
					onChange={handlerInputValue}
				/>
			</div>
		</div>
	);
}
