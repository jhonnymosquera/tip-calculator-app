import './App.css';
import Bill from './components/Bill';
import NumberOfPeople from './components/NumberOfPeople';
import Result from './components/Result';
import SelectTip from './components/SelectTip';

function App() {
	return (
		<div className=" container">
			<h1>Spli Tter</h1>

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
