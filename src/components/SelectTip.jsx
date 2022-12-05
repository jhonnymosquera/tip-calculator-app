import useContexApp from '../Context/useContextApp';

const tips = [5, 10, 15, 25, 50];

export default function SelectTip() {
	const { handerCustom, handlerbuttonValue, value, tipsRef, tipTarget } = useContexApp();

	return (
		<div className="select_tip">
			<label>Select Tip %</label>

			<div className="tips" ref={tipsRef}>
				{tips.map((tip, i) => {
					return (
						<div
							key={i}
							className="tip"
							onClick={(e) => {
								tipTarget(e);
								handlerbuttonValue(e);
							}}
						>
							{tip}%
						</div>
					);
				})}

				<input
					type="number"
					placeholder="Custom"
					name="selecTipCustom"
					min={0}
					value={value.selecTipCustom}
					onChange={handerCustom}
				/>
			</div>
		</div>
	);
}
