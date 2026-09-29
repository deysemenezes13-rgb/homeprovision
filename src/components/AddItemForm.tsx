import { useState } from 'react'
import type { InventoryItem } from '../types/InventoryItem'

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
        <form onSubmit={handleSubmit}>
            <h2>Add New Item</h2>

            <label>
                Item name
                <input
                    type="text"
                    placeholder="e.g. Rice"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </label>

            <label>
                Category
                <select
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                >
                    <option value="">Select category</option>
                    <option value="food">Food</option>
                    <option value="water">Water</option>
                    <option value="medicine">Medicine</option>
                    <option value="hygiene">Hygiene</option>
                    <option value="power">Power & Batteries</option>
                    <option value="other">Other</option>
                </select>
            </label>

            <label>
                Quantity
                <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(event) => setQuantity(Number(event.target.value))}
                />
            </label>

            <label>
                Expiration date
                <input
                    type="date"
                    value={expirationDate}
                    onChange={(event) => setExpirationDate(event.target.value)}
                />
            </label>

            <button type="submit">Add to Inventory</button>
        </form>
    )
}

export default AddItemForm