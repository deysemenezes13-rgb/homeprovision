import './App.css'

function App() {
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
          <p>0 items stored</p>
          <button type="button">Add item</button>
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