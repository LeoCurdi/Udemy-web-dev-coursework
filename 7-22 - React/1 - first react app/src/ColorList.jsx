export default function ColorList({colors}) {
    /* make an array of jsx elements */
    const elements = colors.map(color => <li>{color}</li>)

    return (
        <div>
            <p>Color List</p>
            <ul>
                {elements}
            </ul>
            <ul>
                {colors.map(c => (
                    <li style={{color: c}}>{c}</li>
                ))}
            </ul>
        </div>
    )
}