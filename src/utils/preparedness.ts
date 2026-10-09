
import type { PreparednessItem } from '../types/PreparednessItem'

export function getPreparednessProgress(items: PreparednessItem[]) {
  const totalItems = items.length

  const completedItems = items.filter(
    (item) => item.completed
  ).length

  const progress =
    totalItems === 0
      ? 0
      : Math.round((completedItems / totalItems) * 100)

  return {
    totalItems,
    completedItems,
    progress,
  }
}
