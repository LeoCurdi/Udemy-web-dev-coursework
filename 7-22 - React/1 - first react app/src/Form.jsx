
function handleSubmit(event) { /* event handlers are provided with an event object */
    event.preventDefault()
    console.log('submitted')
}

export default function Form() {
    return (
        <form action="" onSubmit={handleSubmit}>
            <button>submit</button>
        </form>
    )
}