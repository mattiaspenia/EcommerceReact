import customFetch from "../fetch";
import { data } from "../utilities/data";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({});
	const { id } = useParams();
	console.log(product);
	useEffect(() => {
		customFetch(
			2000,
			data.find((item) => item.id === parseInt(id))
		)
			.then((result) => setProduct(result))
			.catch((err) => console.log(err));
	}, [id]);

	return <ItemDetail item={product} />;
};

export default ItemDetailContainer;
