export default function DoubleDice() {
    const num1 = Math.floor(Math.random() * 3) + 1
    const num2 = Math.floor(Math.random() * 3) + 1

/*     const result = num1 === num2 ? "You Win!" : 'you lose!'
    return (
        <div>
            <h2>{result}</h2>
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
        </div>
    ) */

/*     return (
        <div>
            <h2>{num1 === num2 ? "You Win!" : 'you lose!'}</h2>
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
        </div>
    ) */
    const isWinner = num1 === num2
    const styles = {color: isWinner ? 'green': 'red'}
    return (
        <div className="DoubleDice">
            <h2>Double Dice</h2>

            {/* {isWinner ? <h3>You Win!</h3> : null} */}
            {isWinner && <h3 style={styles}>You Win!</h3>} {/* short circuit */}

            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
        </div>
    )
}