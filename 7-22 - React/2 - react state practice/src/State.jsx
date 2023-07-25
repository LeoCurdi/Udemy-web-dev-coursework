
import { useState } from "react";

function generateGameBoard() {
    return Array(5000) /* empty 5000 size array */
}

export default function State() {

    const [board, setBoard] = useState(generateGameBoard) // we can use a function to set initial state if were doing something complex and if we dont add () to the function call it will only run the first time state is changed
    return (
        <button onClick={() => setBoard('hello')}>click to change state</button>
    )
}