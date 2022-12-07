import useContexApp from '../Context/useContextApp';

export default function SelectTip() {
	const { value, valueDispatch, VALUE_TYPES, error, errorDispatch, ERROR_TYPES } = useContexApp();

	return (
		<div className="select_tip">
			<div className="detail">
				<label>Select Tip %</label>
				<span ref={error.errorSelectSpan} className="error">
					Cant't be zero
				</span>
			</div>

			<div className="tips" ref={error.tipsRef}>
				{error.tips.map((tip, i) => {
					return (
						<div
							key={i}
							className="tip"
							onClick={(e) => {
								errorDispatch({
									type: ERROR_TYPES.TIP_TARGET,
									e,
								});
								valueDispatch({
									type: VALUE_TYPES.ST,
									payload: e,
								});
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
					onChange={(e) => {
						errorDispatch({ type: ERROR_TYPES.TIPS_REMOVE });
						valueDispatch({
							type: VALUE_TYPES.STC,
							payload: e,
						});
					}}
				/>
			</div>
		</div>
	);
}
