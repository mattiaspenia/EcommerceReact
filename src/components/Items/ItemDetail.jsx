import ItemCount from "../ItemCount/ItemCount";
import Card from "react-bootstrap/Card";

const onAdd = (quantity) => {
	alert("Seleccionaste " + quantity + " items.");
};

const GetItem = ({ item }) => {
	console.log(item);
	const { name, image, description, price, stock } = item;
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
						<ItemCount stock={stock} initial={1} onAdd={onAdd} />
					</Card.Body>
				</Card>
			) : (
				<p className="loading"> Loading... </p>
			)}
		</>
	);
};

export default GetItem;
