import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
function App() {
	return (
		<div className="App">
			<Navbar />
			<ItemListContainer texto="Bienvenidos a la vestimenta del futuro" />
		</div>
	);
}

export default App;
