
import { useState } from 'react'
import type { InventoryNotification } from '../types/Notification'
import './NotificationCenter.css'

interface NotificationCenterProps {
  notifications: InventoryNotification[]
}

function NotificationCenter({
  notifications,
}: NotificationCenterProps) {
  const [isOpen, setIsOpen] = useState(false)

  const sortedNotifications = [...notifications].sort((a, b) => {
    if (a.type === 'expired' && b.type !== 'expired') return -1
    if (a.type !== 'expired' && b.type === 'expired') return 1

    return a.expirationDate.localeCompare(b.expirationDate)
  })

  return (
    <div className="notification-center">
      <button
        type="button"
        className="notification-trigger"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={`Notifications: ${notifications.length} alerts`}
        aria-expanded={isOpen}
        aria-controls="notification-panel"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
          <path d="M10 21h4" />
        </svg>

        {notifications.length > 0 && (
          <span className="notification-count">
            {notifications.length > 99 ? '99+' : notifications.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div
          className="notification-panel"
          id="notification-panel"
        >
          <div className="notification-panel-header">
            <h3>Notifications</h3>
            <span>{notifications.length} alerts</span>
          </div>

          {sortedNotifications.length === 0 ? (
            <p className="notification-empty">
              No expiration alerts. Your supplies are up to date.
            </p>
          ) : (
            <div className="notification-list">
              {sortedNotifications.map((notification) => (
                <div
                  className={`notification-item ${notification.type}`}
                  key={notification.id}
                >
                  <strong>{notification.title}</strong>
                  <p>{notification.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default NotificationCenter
