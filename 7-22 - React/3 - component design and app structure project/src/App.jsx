
import './App.css'
import Dice from './Dice'
import LuckyN from './LuckyN'
import { sum } from './utilities'
import BoxGrid from './BoxGrid'

function lessThan4(dice) {
  return sum(dice) < 4
}

function allSameValue(dice) {
  return dice.every((v) => v === dice[0])
}

function App() {

  return (
    <>
      <h1>Component Design with Lucky N game</h1>
      <LuckyN title='roll less than 4' numDice={2} winCheck={lessThan4} />
      <LuckyN title='roll all the same values' numDice={2} winCheck={allSameValue} />
      <LuckyN/>

      <BoxGrid/>
    </>
  )
}

export default App
