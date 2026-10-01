export type ExpirationStatus = 'safe' | 'expiring-soon' | 'expired'

export function getDaysRemaining(expirationDate: string) {
  const today = new Date()
  const expiration = new Date(`${expirationDate}T00:00:00`)

  today.setHours(0, 0, 0, 0)

  const difference =
    expiration.getTime() - today.getTime()

  return Math.ceil(
    difference / (1000 * 60 * 60 * 24)
  )
}

export function getExpirationStatus(
  expirationDate: string
): ExpirationStatus {
  const daysRemaining = getDaysRemaining(expirationDate)

  if (daysRemaining < 0) {
    return 'expired'
  }

  if (daysRemaining <= 30) {
    return 'expiring-soon'
  }

  return 'safe'
}

export function formatExpirationDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString('en-IE', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}