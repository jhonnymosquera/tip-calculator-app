import useContexApp from '../Context/useContextApp';

export default function NumberOfPeople() {
	const { iconPerson, value, valueDispatch, VALUE_TYPES, error } = useContexApp();
	const { errorNumberOfPeople, errorNumberOfPeopleSpan } = error;

	return (
		<div className="number_of_people">
			<div className="detail">
				<label>Number of People</label>
				<span ref={errorNumberOfPeopleSpan} className="error">
					Cant't be zero
				</span>
			</div>

			<div ref={errorNumberOfPeople} className="people">
				<img src={iconPerson} alt="icon dolar" />
				<input
					type="number"
					placeholder="0"
					name="numberOfPeople"
					min={0}
					value={value.numberOfPeople}
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
