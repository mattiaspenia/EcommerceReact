import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount/ItemCount";

// Items

const Item = ({ id, name, image, price, stock, description }) => {
	// Alert Agregando items al carro

	const onAdd = (quantity) => {
		alert("Seleccionaste " + quantity + " items.");
	};

	return (
		<>
			<Card bg="white" border="dark" style={{ width: "18rem" }}>
				<Card.Img variant="top" src={image} />
				<Card.Body className="productBody">
					<Card.Title className="productTitle">{name}</Card.Title>
					<div className="price">
						<span>{price}</span>
					</div>
					<ItemCount stock={stock} initial={0} onAdd={onAdd} />
				</Card.Body>
			</Card>
		</>
	);
};

export default Item;
