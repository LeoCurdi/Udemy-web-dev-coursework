
import { useState } from "react"

export default function BetterSignupForm() {

    const [formData, setFormData] = useState({firstName: '', lastName: ''})

    const handleChange = (event) => {
        //const changedField = event.target.name
        //const newValue = event.target.value

        setFormData((currentData) => {
            return {
                ...currentData, // create a copy
                [event.target.name]: event.target.value // update correct field with new value
            }
        })
    }

    return (
        <div>
            <label htmlFor="firstname">enter name</label>
            <input 
                type="text" 
                placeholder="first name" 
                value={formData.firstName}
                onChange={handleChange}
                id="firstname"
                name="firstName"
            />
            <label htmlFor="lastname">enter name</label>
            <input 
                type="text" 
                placeholder="last name" 
                value={formData.lastName} 
                onChange={handleChange}
                id="lastname"
                name="lastName"
            />
            <button>submit</button>
        </div>
    )
}


