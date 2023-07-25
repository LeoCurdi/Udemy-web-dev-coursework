
function handleClick() {
    console.log('clicked')
}

export default function Clicker({message, text}) {
    const clickMessage = () => {
        alert(message)
    }
    
    return (
        <div>
            <button onClick={clickMessage}>{text}</button> {/* the react way is to listen inline rather than do document.querySelector etc */}
            <p onMouseOver={handleClick} >mouse over</p>
        </div>
    )
}