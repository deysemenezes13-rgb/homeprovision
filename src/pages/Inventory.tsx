import AddItemForm from '../components/AddItemForm'
import InventoryList from '../components/InventoryList'
import type { InventoryItem } from '../types/InventoryItem'

interface InventoryProps {
  items: InventoryItem[]
  onAddItem: (item: InventoryItem) => void
  onDeleteItem: (id: string) => void
  onUpdateItem: (item: InventoryItem) => void
}

function Inventory({
  items,
  onAddItem,
  onDeleteItem,
  onUpdateItem,
}: InventoryProps) {
  return (
    <main>
      <section>
        <h1>Inventory</h1>
        <p>Manage your household supplies.</p>
      </section>

      <section>
        <p>
          {items.length} {items.length === 1 ? 'item' : 'items'} stored
        </p>

        <AddItemForm onAddItem={onAddItem} />

        <InventoryList
          items={items}
          onDeleteItem={onDeleteItem}
          onUpdateItem={onUpdateItem}
        />
      </section>
    </main>
  )
}

export default Inventory