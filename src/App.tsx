import { useEffect, useState } from 'react'
import './App.css'
import type { InventoryItem } from './types/InventoryItem'
import { Link, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Inventory from './pages/Inventory'
import Preparedness from './pages/Preparedness'

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

   return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div>
            <Link to="/" className="brand">
              HomeProvision
            </Link>

            <p>Your home supplies, organized and ready.</p>
          </div>

          <nav className="main-nav">
            <Link to="/">Dashboard</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/preparedness">Preparedness</Link>
          </nav>
        </div>
      </header>

      <Routes>
        <Route
          path="/"
          element={<Dashboard items={items} />}
        />

        <Route
          path="/inventory"
          element={
            <Inventory
              items={items}
              onAddItem={handleAddItem}
              onDeleteItem={handleDeleteItem}
              onUpdateItem={handleUpdateItem}
    />
  }
/>
        <Route
          path="/preparedness"
          element={<Preparedness />}
        />
      </Routes>

    </div>
  )
}

export default App