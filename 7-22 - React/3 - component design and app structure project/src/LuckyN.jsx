
/*
    were using state here because this is where the game logic is,
    if we used state in dice or die we wouldnt be able to access it here - data only flows down
*/
import { useState } from "react";
import {getRolls, sum} from './utilities'
import Dice from "./Dice";
import Button from "./Button";

// default win check function
function equals7(dice) {
    return sum(dice) === 7
}

export default function LuckyN({title = 'Lucky 7', numDice = 2, winCheck = equals7}) {
    const [dice, setDice] = useState(getRolls(numDice)) // this will be called every timet he componenet renders but ignored except the first time
    
    const isWinner = winCheck(dice)

    const roll = () => setDice(getRolls(numDice)) // replacing dice with a new array of dice

    return (
        <main className="LuckyN">
            <h1>{title} {isWinner && 'You Win!'}</h1>
            <Dice dice={dice} color="teal"/>
            <Button clickFunction={roll} buttonText='re-roll' />
        </main>
    )
}
