
import { useState } from "react"

export default function UsernameForm() {

    const [username, setUsername] = useState('')

    const updateUsername = (event) => {
        setUsername(event.target.value)
    }

    return (
        <div>
            <label htmlFor="username">enter username</label>
            <input 
                onChange={updateUsername} 
                type="text" 
                placeholder="username" 
                value={username}
                id="username"
            />
            <button>submit</button>
        </div>
    )
}


