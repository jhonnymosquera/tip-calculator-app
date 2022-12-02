import useContexApp from '../Context/useContextApp';

export default function NumberOfPeople() {
	const { iconPerson, handlerInputValue, value } = useContexApp();

	return (
		<div className="number_of_people">
			<label>Number of People</label>

			<div className="people">
				<img src={iconPerson} alt="icon dolar" />
				<input
					type="number"
					placeholder="0"
					name="numberOfPeople"
					min={0}
					value={value.numberOfPeople}
					onChange={handlerInputValue}
				/>
			</div>
		</div>
	);
}
