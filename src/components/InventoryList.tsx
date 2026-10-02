import { useState } from 'react'
import type { InventoryItem } from '../types/InventoryItem'
import {
  getExpirationStatus,
  formatExpirationDate,
} from '../utils/expiration'
import './InventoryList.css'

interface InventoryListProps {
  items: InventoryItem[]
  onDeleteItem: (id: string) => void
  onUpdateItem: (item: InventoryItem) => void
}

function InventoryList({
  items,
  onDeleteItem,
  onUpdateItem,
}: InventoryListProps) {
  const [editingItemId, setEditingItemId] = useState<string | null>(null)

  const [editName, setEditName] = useState('')
  const [editCategory, setEditCategory] = useState('')
  const [editQuantity, setEditQuantity] = useState(1)
  const [editExpirationDate, setEditExpirationDate] = useState('')

  const handleStartEdit = (item: InventoryItem) => {
    setEditingItemId(item.id)
    setEditName(item.name)
    setEditCategory(item.category)
    setEditQuantity(item.quantity)
    setEditExpirationDate(item.expirationDate)
  }

  const handleCancelEdit = () => {
    setEditingItemId(null)
  }

  const handleSaveEdit = (item: InventoryItem) => {
    const updatedItem: InventoryItem = {
      ...item,
      name: editName,
      category: editCategory,
      quantity: editQuantity,
      expirationDate: editExpirationDate,
    }

    onUpdateItem(updatedItem)
    setEditingItemId(null)
  }

  if (items.length === 0) {
    return <p>No items in your inventory yet.</p>
  }

  return (
    <div className="inventory-list">
      {items.map((item) => {
        const status = getExpirationStatus(item.expirationDate)
        const isEditing = editingItemId === item.id

        return (
          <article className="inventory-item" key={item.id}>
            {isEditing ? (
              <div className="edit-form">
                <div className="edit-field">
                  <label htmlFor={`name-${item.id}`}>Item name</label>
                  <input
                    id={`name-${item.id}`}
                    type="text"
                    value={editName}
                    onChange={(event) => setEditName(event.target.value)}
                  />
                </div>

                <div className="edit-field">
                  <label htmlFor={`category-${item.id}`}>Category</label>
                  <select
                    id={`category-${item.id}`}
                    value={editCategory}
                    onChange={(event) => setEditCategory(event.target.value)}
                  >
                    <option value="Food">Food</option>
                    <option value="Water">Water</option>
                    <option value="Medicine">Medicine</option>
                    <option value="Hygiene">Hygiene</option>
                    <option value="Power & Batteries">Power & Batteries</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="edit-field">
                  <label htmlFor={`quantity-${item.id}`}>Quantity</label>
                  <input
                    id={`quantity-${item.id}`}
                    type="number"
                    min="1"
                    value={editQuantity}
                    onChange={(event) =>
                      setEditQuantity(Number(event.target.value))
                    }
                  />
                </div>

                <div className="edit-field">
                  <label htmlFor={`expiration-${item.id}`}>
                    Expiration date
                  </label>
                  <input
                    id={`expiration-${item.id}`}
                    type="date"
                    value={editExpirationDate}
                    onChange={(event) =>
                      setEditExpirationDate(event.target.value)
                    }
                  />
                </div>

                <div className="edit-actions">
                  <button
                    type="button"
                    onClick={() => handleSaveEdit(item)}
                  >
                    Save
                  </button>

                  <button
                    type="button"
                    className="cancel-button"
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="item-header">
                  <div>
                    <h3>{item.name}</h3>
                    <span className="category">{item.category}</span>
                  </div>

                  <span className={`status ${status}`}>
                    {status === 'safe' && 'Safe'}
                    {status === 'expiring-soon' && 'Expiring Soon'}
                    {status === 'expired' && 'Expired'}
                  </span>
                </div>

                <div className="item-details">
                  <span>Quantity: {item.quantity}</span>
                  <span>
                    Expires: {formatExpirationDate(item.expirationDate)}
                  </span>
                </div>

                <div className="item-actions">
                  <button
                    type="button"
                    className="edit-button"
                    onClick={() => handleStartEdit(item)}
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    className="delete-button"
                    onClick={() => onDeleteItem(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </article>
        )
      })}
    </div>
  )
}

export default InventoryList