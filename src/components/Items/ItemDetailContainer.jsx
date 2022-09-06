import CustomFetch from "../fetch";
import { data } from "../utilities/data";
import { useEffect, useState } from "react";
import GetItem from "./ItemDetail";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({});

	useEffect(() => {
		CustomFetch(data).then((res) =>
			setProduct(res[2]).catch((err) => console.log(err))
		);
	}, []);

	return <GetItem item={product} />;
};

export default ItemDetailContainer;
