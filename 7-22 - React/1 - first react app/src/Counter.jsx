
import {useState} from 'react'

export default function Counter(/* {num} */) {
/*     const incrementNum = () => {
        num += 1; 
        console.log(num)
    } */

    const [num, setNum] = useState(5) // setNum will re render the entire component
    console.log(`num: ${num}`)
    const changeNum = () => {
        setNum(num + 1)
    }

    return (
        <div>
            <p>count: {num}</p>
            <button onClick={changeNum}/* onClick={incrementNum} */>click</button>
        </div>
    )
}


