import useContexApp from '../Context/useContextApp';

export default function NumberOfPeople() {
	const { iconPerson } = useContexApp();

	return (
		<div className="number_of_people">
			<label>Number of People</label>

			<div className="people">
				<img src={iconPerson} alt="icon dolar" />
				<input type="number" min={0} value={0} />
			</div>
		</div>
	);
}
