import type { InventoryItem } from '../types/InventoryItem'
import type { PreparednessItem } from '../types/PreparednessItem'
import { Link } from 'react-router-dom'
import { getPreparednessProgress } from '../utils/preparedness'

import {
  getExpirationStatus,
  getDaysRemaining,
  formatExpirationDate,
} from '../utils/expiration'

interface DashboardProps {
  items: InventoryItem[]
  preparednessItems: PreparednessItem[]
}

function Dashboard({
  items,
  preparednessItems,
}: DashboardProps) {
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

  const {
  totalItems,
  completedItems,
  progress,
} = getPreparednessProgress(preparednessItems)

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

     <section className="dashboard-preparedness">
  <div className="dashboard-preparedness-heading">
    <div>
      <h2>Household Preparedness</h2>
      <p>Your household emergency readiness overview.</p>
    </div>

    <strong className="dashboard-preparedness-percent">
      {progress}%
    </strong>
  </div>

  <div
    className="dashboard-preparedness-bar"
    role="progressbar"
    aria-label="Household preparedness progress"
    aria-valuenow={progress}
    aria-valuemin={0}
    aria-valuemax={100}
  >
    <div
      className="dashboard-preparedness-fill"
      style={{ width: `${progress}%` }}
    />
  </div>

  <div className="dashboard-preparedness-footer">
    <span>
      {completedItems} of {totalItems} items prepared
    </span>

    <Link to="/preparedness" className="preparedness-link">
      View Checklist →
    </Link>
  </div>
</section>
    </main>
  )
}

export default Dashboard