import ItemCount from "../ItemCount/ItemCount";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const ItemDetail = ({ item }) => {
	const [itemCount, setItemCount] = useState(0);
	const { name, image, description, price, stock } = item;

	const onAdd = (quantity) => {
		alert("Seleccionaste " + quantity + " items.");
		setItemCount(quantity);
	};

	return (
		<>
			{item ? (
				<Card bg="white" border="dark" style={{ width: "18rem" }}>
					<Card.Img variant="top" src={image} />
					<Card.Body className="productBody">
						<Card.Title className="productTitle">{name}</Card.Title>
						<Card.Text className="productDescription">{description}</Card.Text>
						<div className="price">
							<span>{price}</span>
						</div>
						<div>
							<span>Stock: {stock}</span>
						</div>
						{ItemCount === 0 ? (
							<ItemCount stock={stock} initial={itemCount} onAdd={onAdd} />
						) : (
							<Link to="/cart">
								<Button variant="outline-secondary">Terminar Compra</Button>
							</Link>
						)}
					</Card.Body>
				</Card>
			) : (
				<div className="loading">
					<Spinner animation="border" variant="light" />
				</div>
			)}
		</>
	);
};

export default ItemDetail;
