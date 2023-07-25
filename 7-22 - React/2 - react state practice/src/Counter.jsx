
import { useState } from "react"

export default function Counter() {
    console.log('re-rendered')

    const [count, setCount] = useState(0)

    const add1 = () => {
        setCount(count + 1)
    }
    const add3 = () => {
 /*        setCount(count + 1)
        setCount(count + 1) // count is still 0
        setCount(count + 1) */ // count is still 0
        // so were setting it 3 times to go up by one. so it only goes up by one
        
        // lets use updater functions instead
        // this is basically just callback syntax that queues up the updates
        setCount(currentCount => currentCount + 1)
        setCount(currentCount => currentCount + 1)
        setCount(currentCount => currentCount + 1)
    }
    const setTo10 = () => {
        setCount(10)
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={add1}>add 1</button>
            <button onClick={add3}>add 3</button>
            <button onClick={setTo10}>set to 10</button>
        </div>
    )
}
