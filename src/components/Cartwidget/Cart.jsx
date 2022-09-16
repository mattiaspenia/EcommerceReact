import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContextProvider } from "../CartContext";

const Cart = () => {
	const test = useContext(CartContextProvider);

	return (
		<div className="containerCarrito">
			<div className="Carrito">Su carrito</div>
			<div className="Top">
				<Link to="/">
					<div className="TopButton">Continuar Comprando</div>
				</Link>
				{test.cartList.length > 0 ? (
					<div className="TopButton" type="filled" onClick={test.removeList}>
						Remover todos los Productos
					</div>
				) : (
					<div className="TopButton">Su carrito de compras esta Vacio</div>
				)}
			</div>
			<div className="ContentCart">
				{test.cartList.length > 0 ? (
					test.cartList.map((item) => (
						<div className="Product" key={item.idItem}>
							<div className="ProductDetail">
								<div className="ImageCart" src={item.imgItem} />
								<div className="Details">
									<span>
										<b>Product:</b> {item.nameItem}
									</span>
									<div
										classname="TopButton"
										type="filled"
										onClick={() => test.deleteItem(item.idItem)}
									>
										Borrar
									</div>
								</div>
							</div>
							<div className="PriceDetail">
								<div className="ProductAmountContainer">
									<div className="ProductAmount">{item.qtyItem} item(s)</div>
								</div>
								<div className="ProductPrice">$ {item.costItem} Cada Uno</div>
							</div>
						</div>
					))
				) : (
					<div className="TitleCart"></div>
				)}
			</div>
		</div>
	);
};

export default Cart;
