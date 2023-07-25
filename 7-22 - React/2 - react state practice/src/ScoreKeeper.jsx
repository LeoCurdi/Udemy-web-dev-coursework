
import { useState } from "react";

export default function ScoreKeeper() {

    const [scores, setScores] = useState({p1Score: 0, p2Score: 0})

    function p1Plus1() {
        setScores((oldScores) => {
            // we have to make a copy of the scores object in order to update state
            // this is because state compares the old value to the new value and with arrays it compares id's so it wont know that anything changed unless you give it a different array
            return {...oldScores, p1Score: oldScores.p1Score + 1}
        })
    }
    function p2Plus1() {
        setScores((oldScores) => {
            // we have to make a copy of the scores object in order to update state
            return {...oldScores, p2Score: oldScores.p2Score + 1}
        })
    }

    return (
        <div>
            <p>player 1: {scores.p1Score}</p>
            <p>player 2: {scores.p2Score}</p>
            <button onClick={p1Plus1}>+1 player 1</button>
            <button onClick={p2Plus1}>+1 player 2</button>
        </div>
    )
}
