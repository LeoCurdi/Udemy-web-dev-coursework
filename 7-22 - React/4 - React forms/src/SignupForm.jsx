
import { useState } from "react"

export default function SignupForm() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const updateFirstname = (event) => {
        setFirstName(event.target.value)
    }
    const updateLastname = (event) => {
        setLastName(event.target.value)
    }

    return (
        <div>
            <label htmlFor="firstname">enter name</label>
            <input 
                onChange={updateFirstname} 
                type="text" 
                placeholder="first name" 
                value={firstName}
                id="firstname"
            />
            <label htmlFor="lastname">enter name</label>
            <input 
                onChange={updateLastname} 
                type="text" 
                placeholder="last name" 
                value={lastName}
                id="lastname"
            />
            <button>submit</button>
        </div>
    )
}


