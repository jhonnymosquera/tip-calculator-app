import useContexApp from '../Context/useContextApp';

export default function NumberOfPeople() {
	const { iconPerson, handlerInputValue, value, errorRefSpan, errorRefInput } = useContexApp();

	return (
		<div className="number_of_people">
			<div className="detail">
				<label>Number of People</label>
				<span ref={errorRefSpan} className="error">
					Cant't be zero
				</span>
			</div>

			<div ref={errorRefInput} className="people">
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
