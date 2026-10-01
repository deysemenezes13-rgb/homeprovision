import { useState } from 'react'
import './App.css'
import AddItemForm from './components/AddItemForm'
import type { InventoryItem } from './types/InventoryItem'
import InventoryList from './components/InventoryList'
import { getExpirationStatus } from './utils/expiration'


function App() {

  const [items, setItems] = useState<InventoryItem[]>([])
  const handleAddItem = (newItem: InventoryItem) => {
    setItems((currentItems) => [...currentItems, newItem])
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
          <p>{items.length} items stored</p>

          <AddItemForm onAddItem={handleAddItem} />

          <InventoryList items={items} />

        </section>

        <section>
          <h2>Items Needing Attention</h2>

          {itemsNeedingAttention.length === 0 ? (
            <p>All your supplies are within their safe dates.</p>
          ) : (
            <p>
              {itemsNeedingAttention.length}{' '}
              {itemsNeedingAttention.length === 1 ? 'item needs' : 'items need'} attention.
            </p>
          )}
          {itemsNeedingAttention.length > 0 && (
            <div className="attention-summary">
              <span className="attention-expired">
                {expiredItems.length} Expired
              </span>

              <span className="attention-soon">
                {expiringSoonItems.length} Expiring Soon
              </span>
            </div>
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