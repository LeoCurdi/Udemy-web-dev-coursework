
import { useState } from "react";

export default function ShoppingListForm({addItem}) {

    const [formData, setFormData] = useState({product: '', quantity: 0})

    const handleChange = (event) => {
        setFormData(currData => {
            return {
                ...currData, // create a copy
                [event.target.name]: event.target.value // update correct field with new value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addItem(formData)
        setFormData({product: '', quantity: 0}) // clear the form after submit
    }

    return (
        <form onSubmit={handleSubmit} action="">
            {/* <h1>Product is: {formData.product} and quantity is: {formData.quantity}</h1> */}
            <label htmlFor="product">product name</label>
            <input value={formData.product} onChange={handleChange} type="text" placeholder="product name" name="product" id="product"/>
            <label htmlFor="quantity">quantity</label>
            <input value={formData.quantity} onChange={handleChange} type="number" placeholder="1" name="quantity" id="quantity"/>
            <button type="submit">submit</button>
        </form>
    )
}


