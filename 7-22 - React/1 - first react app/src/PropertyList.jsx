
import Property from "./property";
import './PropertyList.css'

export default function PropertyList({items}) {

    return (
        <ul className="PropertyList">
            {items.map(i => (
                <Property {...i} key={i.id} />
            ))}
        </ul>
    )
}