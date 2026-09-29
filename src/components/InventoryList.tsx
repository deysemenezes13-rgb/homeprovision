import type { InventoryItem } from '../types/InventoryItem'

interface InventoryListProps {
  items: InventoryItem[]
}

function InventoryList({ items }: InventoryListProps) {
  if (items.length === 0) {
    return <p>No items in your inventory yet.</p>
  }

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Category: {item.category}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Expires: {item.expirationDate}</p>
        </div>
      ))}
    </div>
  )
}

export default InventoryList