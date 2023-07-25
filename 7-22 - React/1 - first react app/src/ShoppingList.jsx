
import ShoppingListItem from "./ShoppingListItem"

export default function ShoppingList({items}) {
    return (
        <>
            <h1>Shopping list</h1>
            <ul>
                {items.map(i => (
                    <ShoppingListItem key={i.id} {...i}/* item={i.item} quantity={i.quantity} isCompleted={i.isCompleted} */ />
                ))}
            </ul>
        </>
    )
}