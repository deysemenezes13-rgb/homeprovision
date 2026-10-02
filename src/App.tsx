import { useEffect, useState } from 'react'
import './App.css'
import AddItemForm from './components/AddItemForm'
import InventoryList from './components/InventoryList'
import type { InventoryItem } from './types/InventoryItem'
import {
  getExpirationStatus,
  getDaysRemaining,
  formatExpirationDate,
} from './utils/expiration'

function App() {
  const [items, setItems] = useState<InventoryItem[]>(() => {
  const savedItems = localStorage.getItem('homeprovision-items')

  if (savedItems) {
    return JSON.parse(savedItems)
  }

  return []
})

useEffect(() => {
  localStorage.setItem(
    'homeprovision-items',
    JSON.stringify(items)
  )
}, [items])

  const handleAddItem = (newItem: InventoryItem) => {
    setItems((currentItems) => [...currentItems, newItem])
  }
  
  const handleDeleteItem = (id: string) => {
  setItems((currentItems) =>
    currentItems.filter((item) => item.id !== id)
  )
  }

  const handleUpdateItem = (updatedItem: InventoryItem) => {
  setItems((currentItems) =>
    currentItems.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    )
  )
}

  const itemsNeedingAttention = items.filter((item) => {
    const status = getExpirationStatus(item.expirationDate)

    return status === 'expiring-soon' || status === 'expired'
  })

  const expiredItems = items.filter(
    (item) => getExpirationStatus(item.expirationDate) === 'expired'
  )

  const expiringSoonItems = items.filter(
    (item) => getExpirationStatus(item.expirationDate) === 'expiring-soon'
  )

  return (
    <div className="app">
      <header>
        <h1>HomeProvision</h1>
        <p>Your home supplies, organized and ready.</p>
      </header>

      <main>
        <section>
          <h2>Household Overview</h2>
          <p>Everything you need to keep your household prepared.</p>
        </section>

        <section>
          <h2>Inventory</h2>

          <p>
            {items.length} {items.length === 1 ? 'item' : 'items'} stored
          </p>

          <AddItemForm onAddItem={handleAddItem} />

          <InventoryList
            items={items}
            onDeleteItem={handleDeleteItem}
            onUpdateItem={handleUpdateItem}
          />

        </section>

        <section>
          <h2>Items Needing Attention</h2>

          {itemsNeedingAttention.length === 0 ? (
            <p>All your supplies are within their safe dates.</p>
          ) : (
            <>
              <p>
                {itemsNeedingAttention.length}{' '}
                {itemsNeedingAttention.length === 1
                  ? 'item needs'
                  : 'items need'}{' '}
                attention.
              </p>

              <div className="attention-summary">
                <span className="attention-expired">
                  {expiredItems.length} Expired
                </span>

                <span className="attention-soon">
                  {expiringSoonItems.length} Expiring Soon
                </span>
              </div>

              <div className="attention-list">
                {itemsNeedingAttention.map((item) => {
                  const status = getExpirationStatus(item.expirationDate)
                  const daysRemaining = getDaysRemaining(item.expirationDate)

                  return (
                    <div className="attention-item" key={item.id}>
                      <div>
                        <strong>{item.name}</strong>

                        <span className="attention-date">
                          {formatExpirationDate(item.expirationDate)}
                        </span>
                      </div>

                      <span className={`status ${status}`}>
                        {status === 'expired'
                          ? 'Expired'
                          : daysRemaining === 0
                            ? 'Expires today'
                            : `${daysRemaining} days left`}
                      </span>
                    </div>
                  )
                })}
              </div>
            </>
          )}
        </section>

        <section>
          <h2>Preparedness</h2>
          <p>Start your household preparedness checklist.</p>
        </section>
      </main>
    </div>
  )
}

export default App