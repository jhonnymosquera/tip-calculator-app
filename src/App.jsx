import './App.css';
import Bill from './components/Bill';
import SelectTip from './components/SelectTip';

function App() {
	return (
		<div className=" container">
			<h1>Spli Tter</h1>

			<div className="App">
				<div className="div1">
					<Bill />
					<SelectTip />
				</div>
			</div>
		</div>
	);
}

export default App;
