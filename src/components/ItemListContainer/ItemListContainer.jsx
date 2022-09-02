import ItemList from '../Items/ItemList'
import CustomFetch from '../fetch';
import Title from '../Title/index'
import { data } from "../utilities/data";
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        CustomFetch(data)
          .then(res => setProducts(res))
          .catch(err => console.log(err))
      }, []);
    
    return (
        <div className="ItemListContainer">
            <Container>
            <Row>
                <Title />
                <ItemList items={products}/>
            </Row>
            </Container>
        </div>
    );
};
export default ItemListContainer;