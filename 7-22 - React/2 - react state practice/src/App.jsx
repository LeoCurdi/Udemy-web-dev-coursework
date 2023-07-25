
import './App.css'
import Counter from './Counter'
import State from './State'
import ScoreKeeper from './ScoreKeeper'
import EmojiClicker from './EmojiClicker'
import ScoreKeeper2 from './ScoreKeeper2'

function App() {

  return (
    <>
      <h1>State</h1>
{/*       <Counter/>
      <State/> */}
{/*       <ScoreKeeper/>
      <EmojiClicker/> */}
      <ScoreKeeper2 numPlayers={4} target={3} />
    </>
  )
}

export default App
