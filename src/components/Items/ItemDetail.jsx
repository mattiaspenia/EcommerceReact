import ItemCount from "../ItemCount/ItemCount";
import Card from "react-bootstrap/Card";

const onAdd = (quantity) => {
	alert("Seleccionaste " + quantity + " items.");
};

const GetItem = ({ item }) => {
	console.log(item);
	return (
		<>
			{item ? (
				<Card bg="black" border="dark" style={{ width: "18rem" }}>
					<Card.Img variant="top" src={item.image} />
					<Card.Body className="productBody">
						<Card.Title className="productTitle">{item.name}</Card.Title>
						<Card.Text className="productDescription">
							{item.description}
						</Card.Text>
						<div className="price">
							<span>{item.price}</span>
							<span>stock: {item.stock}</span>
							<span>{item.description}</span>
						</div>
						<ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
					</Card.Body>
				</Card>
			) : (
				<p className="loading"> Loading... </p>
			)}
		</>
	);
};

export default GetItem;
