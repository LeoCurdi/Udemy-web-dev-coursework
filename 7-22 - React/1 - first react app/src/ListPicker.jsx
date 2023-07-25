
export default function ListPicker({values}) {
    const randN = Math.floor(Math.random() * values.length)
    const element = values[randN]
    return (
        <div>
            <p>The list of values: {values}</p>
            <p>Random element: {element}</p>
        </div>
    )
}