import type { InventoryItem } from '../types/InventoryItem'

import {
  getExpirationStatus,
  getDaysRemaining,
  formatExpirationDate,
} from '../utils/expiration'

interface DashboardProps {
  items: InventoryItem[]
}

function Dashboard({ items }: DashboardProps) {
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

  const safeItems = items.filter(
    (item) => getExpirationStatus(item.expirationDate) === 'safe'
  )

  return (
    <main>
      <section className="overview-section">
        <div className="overview-heading">
          <h2>Household Overview</h2>
          <p>Everything you need to keep your household prepared.</p>
        </div>

        <div className="overview-grid">
          <div className="overview-card">
            <span className="overview-label">Total Items</span>
            <strong>{items.length}</strong>
            <span className="overview-description">
              Supplies in your inventory
            </span>
          </div>

          <div className="overview-card">
            <span className="overview-label">Safe</span>
            <strong>{safeItems.length}</strong>
            <span className="overview-description">
              Supplies within safe dates
            </span>
          </div>

          <div className="overview-card">
            <span className="overview-label">Expiring Soon</span>
            <strong>{expiringSoonItems.length}</strong>
            <span className="overview-description">
              Within the next 30 days
            </span>
          </div>

          <div className="overview-card">
            <span className="overview-label">Expired</span>
            <strong>{expiredItems.length}</strong>
            <span className="overview-description">
              Supplies to replace
            </span>
          </div>
        </div>
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
  )
}

export default Dashboard