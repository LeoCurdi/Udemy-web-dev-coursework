
import { useState } from "react"
import { v4 as uuid} from 'uuid'
// uuid() generates a random id

export default function EmojiClicker() {
    
    const [emojis, setEmojis] = useState([{id: uuid(), emoji: ":)"}])

    const addEmoji = () => {
        setEmojis((oldEmojis) => (
            [...oldEmojis, {id: uuid(), emoji: ";)"}]
        ))
    }

    const deleteEmoji = (id) => {
        //console.log(id)
        setEmojis(oldEmojis => {
            return oldEmojis.filter(e => e.id !== id) // make a new array with everthing except the one we want to remove

        })
    }

    const reverse = () => {
        setEmojis((oldEmojis) => {
            return oldEmojis.map((e) => {
                return {
                  ...e,
                  emoji: '(;',
                };
            })
        });
    }

    return (
        <div>
            {emojis.map(e => (
                <span 
                    onClick={() => deleteEmoji(e.id)} 
                    key={e.id} 
                    style={{fontSize: '4rem'}}
                >
                    {e.emoji}
                </span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
            <button onClick={reverse}>make them all reverse</button>
        </div>
    )
}

