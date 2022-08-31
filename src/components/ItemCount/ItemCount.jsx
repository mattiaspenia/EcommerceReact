import '../ItemCount/ItemCount.css'
import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);   
        const increase = () => {
            setCount(count + 1)
            
        }
    
        const decrease = () => {
            setCount(count - 1);
        }
    
    return (
        <div className='contador'>
            <Button variant="primary" disabled={count <= 1} onClick={decrease}>-</Button>{' '}
            <span>{count}</span>
            <Button variant="primary" disabled={count >= stock} onClick={increase}>+</Button>{' '}
            <div>
                <Button variant="outline-success" disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</Button>{' '}
            </div>
        </div>
    )
}

export default ItemCount