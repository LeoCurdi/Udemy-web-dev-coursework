
import { useState } from "react"

export default function ScoreKeeper2({numPlayers = 3, target = 5}) {
    // fill a correctly sized array with 0s
    const [scores, setScores] = useState(new Array(numPlayers).fill(0))

    const increaseScore = (index) => {
        // method 1: make a copy
/*         setScores((oldScores) => {
            const copy = [...oldScores]
            copy[index] += 1
            return copy
        }) */

        // method 2: map
        setScores((oldScores) => {
            return oldScores.map((score, i) => {
                if (i === index) {
                    return  score + 1 ;
                } else {
                    return score;
                }
              });
        })
    }

    const reset = () => {
        setScores(new Array(numPlayers).fill(0))
    }

    return (
        <div>
            <h1>Score Keeper</h1>

            <ul>
                {scores.map((score, index) => {
                    return (
                        <li key={index}>
                            Player {index + 1}: {score}
                            <button onClick={() => increaseScore(index)}>+1</button>
                            <p>{score >= target ? 'Winner!': ''}</p>
                        </li>
                    )
                })}
            </ul>

            <button onClick={reset}>Reset</button>
        </div>
    )
}