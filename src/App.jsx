import './App.css';
import Bill from './components/Bill';
import NumberOfPeople from './components/NumberOfPeople';
import Result from './components/Result';
import SelectTip from './components/SelectTip';
import useContexApp from './Context/useContextApp';

function App() {
	const { logo } = useContexApp();

	return (
		<div className=" container">
			<div className="title">
				<img src={logo} alt="Logo" />
			</div>

			<div className="App">
				<div className="split_tter">
					<Bill />
					<SelectTip />
					<NumberOfPeople />
				</div>

				<div className="split_tter_result">
					<Result />
				</div>
			</div>
		</div>
	);
}

export default App;
