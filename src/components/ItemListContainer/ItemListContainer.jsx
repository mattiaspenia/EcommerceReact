import ItemCount from '../ItemCount/ItemCount'
import Title from '../Title/index'

export const ItemListContainer = ({texto}) => {
    const onAdd = (qty) => {
        alert ("Compraste "  + qty + " items.");
    }
    return (
        <>
        <Title greeting={texto}/>
        <ItemCount stock={5} initial={3} onAdd={onAdd} />
        </>
    )
}
export default ItemListContainer;