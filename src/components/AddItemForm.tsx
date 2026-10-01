import { useState } from 'react'
import type { InventoryItem } from '../types/InventoryItem'
import './AddItemForm.css'

interface AddItemFormProps {
    onAddItem: (item: InventoryItem) => void
}

function AddItemForm({ onAddItem }: AddItemFormProps) {

    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [expirationDate, setExpirationDate] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const newItem: InventoryItem = {
            id: crypto.randomUUID(),
            name,
            category,
            quantity,
            expirationDate,
        }

        onAddItem(newItem)
        setName('')
        setCategory('')
        setQuantity(1)
        setExpirationDate('')
    }

    return (
  <form className="add-item-form" onSubmit={handleSubmit}>
    <h2>Add New Item</h2>

    <div className="form-grid">
      <div className="form-field">
        <label htmlFor="item-name">Item name</label>
        <input
          id="item-name"
          type="text"
          placeholder="e.g. Rice"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          required
        >
          <option value="">Select category</option>
          <option value="food">Food</option>
          <option value="water">Water</option>
          <option value="medicine">Medicine</option>
          <option value="hygiene">Hygiene</option>
          <option value="power">Power & Batteries</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="quantity">Quantity</label>
        <input
          id="quantity"
          type="number"
          min="1"
          value={quantity}
          onChange={(event) => setQuantity(Number(event.target.value))}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="expiration-date">Expiration date</label>
        <input
          id="expiration-date"
          type="date"
          value={expirationDate}
          onChange={(event) => setExpirationDate(event.target.value)}
          required
        />
      </div>
    </div>

    <button type="submit">Add to Inventory</button>
  </form>
)
}

export default AddItemForm