import { Button } from 'react-bootstrap'
import { Add, Remove } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import { ProductAmountContainer, ProductAmount } from ''

const ItemCount = ({stock = 0, initial = 1, onAdd}) => {
    const [count, setCount] = useState(0);
    useEffect (() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    return (
        <ProductAmountContainer>
            <Button  className="bi bi-plus-lg" variant="text" onClick={increment}><Add /></Button>
            <ProductAmount>{count}</ProductAmount>
            <Button variant="text" className="bi bi-dash" onClick={decrement}><Remove /></Button>
            {
                stock
                ? <Button variant="contained" color="primary" onClick={() => onAdd(count)}>Agregar al Carrito</Button>
                : <Button variant="contained" disabled>Agregar al Carrito</Button>
            }
        </ProductAmountContainer>
    )
}
export default ItemCount;