
import './ColorBox.css'
import {useState} from 'react'



function getNewColor(arr) {
    const n = Math.floor(Math.random() * arr.length)
    return arr[n]
} 

export default function ColorBox({colors}) {

    const [color, setColor] = useState(getNewColor(colors))

    const changeColor = () => {
        const newColor = getNewColor(colors)
        setColor(newColor)
    }

    return (
        <div onClick={changeColor} className="ColorBox" style={{backgroundColor: color}}>

        </div>
    )
}