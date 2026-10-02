import type { InventoryItem } from '../types/InventoryItem'
import {
  getExpirationStatus,
  formatExpirationDate,
} from '../utils/expiration'
import './InventoryList.css'

interface InventoryListProps {
  items: InventoryItem[]
  onDeleteItem: (id: string) => void
}

function InventoryList({
  items,
  onDeleteItem,
}: InventoryListProps) {
  if (items.length === 0) {
    return <p>No items in your inventory yet.</p>
  }

  return (
    <div className="inventory-list">
      {items.map((item) => {
        const status = getExpirationStatus(item.expirationDate)

        return (
          <article className="inventory-item" key={item.id}>
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
                className="delete-button"
                onClick={() => onDeleteItem(item.id)}
              >
                Delete
              </button>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default InventoryList