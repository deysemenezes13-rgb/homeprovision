
import type { InventoryItem } from '../types/InventoryItem'
import type { InventoryNotification } from '../types/Notification'

import {
  getExpirationStatus,
  getDaysRemaining,
} from './expiration'

export function generateInventoryNotifications(
  items: InventoryItem[]
): InventoryNotification[] {
  return items.flatMap((item): InventoryNotification[] => {
    const status = getExpirationStatus(item.expirationDate)
    const daysRemaining = getDaysRemaining(item.expirationDate)

    if (status === 'expired') {
      return [{
        id: `expired-${item.id}`,
        itemId: item.id,
        title: 'Product Expired',
        message: `${item.name} has expired. Consider replacing it.`,
        type: 'expired' as const,
        expirationDate: item.expirationDate,
      }]
    }

    if (status === 'expiring-soon') {
      const message =
        daysRemaining === 0
          ? `${item.name} expires today.`
          : `${item.name} expires in ${daysRemaining} ${
              daysRemaining === 1 ? 'day' : 'days'
            }.`

      return [{
        id: `expiring-${item.id}`,
        itemId: item.id,
        title: 'Expiring Soon',
        message,
        type: 'expiring-soon' as const,
        expirationDate: item.expirationDate,
      }]
    }

    return []
  })
}
