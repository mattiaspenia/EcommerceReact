import '../ItemCount/ItemCount.css'
import React,{ useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(parseInt(initial));   
        const increase = () => {
            setCount(prev => prev + 1)
            
        }
    
        const decrease = () => {
            setCount(prev => prev - 1);
        }

        useEffect(() => {
            setCount(parseInt(initial));
        }, [initial])
    
    return (
        <div className='contador'>
            <Button variant="outline-dark" disabled={count <= 1} onClick={decrease}>-</Button>{' '}
            <span>{count}</span>
            <Button variant="outline-dark" disabled={count >= stock} onClick={increase}>+</Button>{' '}
            <div>
                <Button variant="light" disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</Button>{' '}
            </div>
        </div>
    )
}

export default ItemCount