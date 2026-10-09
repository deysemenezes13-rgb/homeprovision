
export type NotificationType = 'expiring-soon' | 'expired'

export interface InventoryNotification {
  id: string
  itemId: string
  title: string
  message: string
  type: NotificationType
  expirationDate: string
}
