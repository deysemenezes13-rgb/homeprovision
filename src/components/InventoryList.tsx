import type { InventoryItem } from '../types/InventoryItem'
import './InventoryList.css'

interface InventoryListProps {
  items: InventoryItem[]
}

function InventoryList({ items }: InventoryListProps) {
  const getExpirationStatus = (expirationDate: string) => {
    const today = new Date()
    const expiration = new Date(`${expirationDate}T00:00:00`)

    today.setHours(0, 0, 0, 0)

    const differenceInMilliseconds =
      expiration.getTime() - today.getTime()

    const daysRemaining = Math.ceil(
      differenceInMilliseconds / (1000 * 60 * 60 * 24)
    )

    if (daysRemaining < 0) {
      return {
        label: 'Expired',
        className: 'expired',
      }
    }

    if (daysRemaining <= 30) {
      return {
        label: 'Expiring Soon',
        className: 'expiring-soon',
      }
    }

    return {
      label: 'Safe',
      className: 'safe',
    }
  }

  const formatDate = (date: string) => {
    return new Date(`${date}T00:00:00`).toLocaleDateString('en-IE', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
  }

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

              <span className={`status ${status.className}`}>
                {status.label}
              </span>
            </div>

            <div className="item-details">
              <span>Quantity: {item.quantity}</span>
              <span>Expires: {formatDate(item.expirationDate)}</span>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default InventoryList