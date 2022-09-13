import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Item = ({ id, name, image, price, stock, description }) => {
	return (
		<>
			<Card bg="white" border="dark" style={{ width: "18rem" }}>
				<Card.Img variant="top" src={image} />
				<Card.Body className="productBody">
					<Card.Title className="productTitle">{name}</Card.Title>
					<div className="price">
						<span>{price}</span>
					</div>
					<div>
						<span>{description}</span>
					</div>
					<div>
						<Link to={`/item/${id}`}>Detalles</Link>{" "}
					</div>
				</Card.Body>
			</Card>
		</>
	);
};

export default Item;
