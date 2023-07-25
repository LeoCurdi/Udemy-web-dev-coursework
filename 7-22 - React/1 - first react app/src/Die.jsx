export default function Die({numSides = 6}) { /* set a default value */
    const roll = Math.floor(Math.random() * numSides) + 1
    return <p>{numSides} side die roll {roll}</p>
}