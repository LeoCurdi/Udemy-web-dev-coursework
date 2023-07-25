
export default function Greeter({name = 'everyone', from = 'anonymous'}) {
    //console.log(props)
    return (
        <>
            <h1>Hello {name}!</h1>
            <h2>-{from}</h2>
        </>
    )
}