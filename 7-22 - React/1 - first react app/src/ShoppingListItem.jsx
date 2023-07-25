export default function ShoppingListItem({item, quantity, isCompleted}) {
    const styles = {
        color: isCompleted ? 'grey': 'black', 
        textDecoration: isCompleted ? 'line-through': ''
    }
    return (
        <li style={styles}>
            {item} - {quantity}
        </li>
    )
}

