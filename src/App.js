import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import Cart from "./components/Cartwidget/Cart";
import { CartContextProvider } from "./components/Cartwidget/CartContext";
function App() {
	return (
		<CartContextProvider>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route path="/category/:id" element={<ItemListContainer />} />
					<Route path="/item/:id" element={<ItemDetailContainer />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</CartContextProvider>
	);
}

export default App;
