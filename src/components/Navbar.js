import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="Navbar">
			<span className="nav-logo">OneirosClothing</span>
			<div className={`nav-items ${isOpen && "open"}`}>
				<a href="/home">Home</a>
				<a href="/productos">Productos</a>
				<a href="/sale">Sale</a>
				<a href="/contact">Contacto</a>
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

export default Navbar;
