
import './Button.css'

export default function Button({clickFunction, buttonText}) {
    return <button onClick={clickFunction} className='Button'>{buttonText}</button>
}