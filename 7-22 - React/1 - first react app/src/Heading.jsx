export default function Heading({color = 'teal', text = 'heading', fontSize='40px'}) {
    return (
        <h1 style={{color: color, fontSize: fontSize}}>{text}</h1>
    )
}