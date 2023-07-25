
import './App.css'
import Chicken from './Chicken'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'
import Heading from './Heading'
import ColorList from './ColorList'
import Slots from './Slots'
import ShoppingList from './ShoppingList'
import PropertyList from './PropertyList'
import Clicker from './Clicker'
import Form from './Form'
import Counter from './Counter'
import Toggler from './Toggler'
import ToggleCounter from './ToggleCounter'
import ColorBoxGrid from './ColorBoxGrid'

const data = [
  {id: 1, item: 'eggs', quantity: 12, isCompleted: false},
  {id: 2, item: 'cheese', quantity: 1, isCompleted: true},
  {id: 3, item: 'bacon', quantity: 12, isCompleted: true}
]

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function App() {

  return (
    <>
{/*       <Heading color='magenta' text='welcome' fontSize='70px'/>
      <Heading/>
      <Greeter name='Bill' from='Leo'/> 
      <Greeter/>
      <Die numSides={20}/>
      <ListPicker values={[3,2,8,6]}/>
      <ListPicker values={['cool','lol','nice']}/>
      <DoubleDice/>
      <DoubleDice/>
      <ColorList colors={['red', 'pink', 'teal']}/> */}

      {/* slots game */}
      {/* <Slots val1='.' val2=',' val3='.'/> */}

      {/* shopping list demo */}
      {/* <ShoppingList items={data}/> */}

      {/* rental property demo */}
      {/* <PropertyList items={properties}/> */}

      {/* intro to events */}
{/*       <Form/>
      <Clicker message='hi' text='do not click' /> */}

      {/* react state */}
{/*       <Counter num={1}/>
      <Toggler/>
      <ToggleCounter/> */}
      <ColorBoxGrid/>
    </>
  )
}

export default App
