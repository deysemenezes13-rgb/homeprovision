import { useState } from 'react'
import './App.css'
import AddItemForm from './components/AddItemForm'
import type { InventoryItem } from './types/InventoryItem'
import InventoryList from './components/InventoryList'


function App() {

  const [items, setItems] = useState<InventoryItem[]>([])
  const handleAddItem = (newItem: InventoryItem) => {
  setItems((currentItems) => [...currentItems, newItem])
}

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
          <h2>Expiring Soon</h2>
          <p>No items are close to expiration.</p>
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