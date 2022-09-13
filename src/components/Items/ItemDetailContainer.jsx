import customFetch from "../fetch";
import { data } from "../utilities/data";
import { useEffect, useState } from "react";
import GetItem from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({});
	const { id } = useParams();

	useEffect(() => {
		customFetch(
			500,
			data.find((item) => item.id === id)
		)
			.then((result) => setProduct(result))
			.catch((err) => console.log(err));
	}, [id]);

	return <GetItem item={product} />;
};

export default ItemDetailContainer;
