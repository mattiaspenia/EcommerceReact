import ItemCount from '../ItemCount/ItemCount'
import Title from '../Title/index'

export const ItemListContainer = ({texto}) => {
    const onAdd = (qty) => {
        alert ("You have selected" + qty + "items.");
    }
    return (
        <>
        <Title greeting={texto}/>
        <ItemCount stock_={5} initial={1} onAdd={onAdd} />
        </>
    )
}
export default ItemListContainer;