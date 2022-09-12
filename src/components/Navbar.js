import React, { useState } from "react";
import "./Navbar.css";
import CartWidget from "./Cartwidget/index.jsx";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import { Link } from "react-router-dom";
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="Navbar">
			<Link to="/">
				<span className="nav-logo">Oneiros Clothing</span>
			</Link>
			<div className={`nav-items ${isOpen && "open"}`}>
				<Link to="/">Home</Link>
				<Link to="/category/2">Remeras</Link>
				<Link to="/category/1">Buzos</Link>
				<Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
					<CartWidget />
				</Link>
			</div>
			<div
				className={`nav-toggle ${isOpen && "open"}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<div className="bar"></div>
			</div>
		</div>
	);
};
<ItemListContainer />;
export default Navbar;
