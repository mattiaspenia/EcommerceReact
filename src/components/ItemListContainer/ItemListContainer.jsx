import ItemList from "../Items/ItemList";
import customFetch from "../fetch";
import Title from "../Title/index";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
const { data } = require("../utilities/data");

const ItemListContainer = () => {
	const [datos, setDatos] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			customFetch(
				500,
				data.filter((item) => item.categoryId === parseInt(id))
			)
				.then((result) => setDatos(result))
				.catch((err) => console.log(err));
		} else {
			customFetch(500, data)
				.then((result) => setDatos(result))
				.catch((err) => console.log(err));
		}
	}, [id]);

	return (
		<div className="ItemListContainer">
			<Container>
				<Row>
					<Title />
					<ItemList items={datos} />
				</Row>
			</Container>
		</div>
	);
};
export default ItemListContainer;
