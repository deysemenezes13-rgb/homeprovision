import type { PreparednessItem } from '../types/PreparednessItem'
import './Preparedness.css'
import { getPreparednessProgress } from '../utils/preparedness'
import { useState } from 'react'

interface PreparednessProps {
  preparednessItems: PreparednessItem[]
  onToggleItem: (id: string) => void
}

function Preparedness({
  preparednessItems,
  onToggleItem,
}: PreparednessProps) {
  type ChecklistFilter = 'all' | 'pending' | 'prepared'

  const [filter, setFilter] = useState<ChecklistFilter>('all')

  const filteredItems = preparednessItems.filter((item) => {
    if (filter === 'pending') {
      return !item.completed
    }

    if (filter === 'prepared') {
      return item.completed
    }

    return true
  })

  const pendingItems = preparednessItems.filter(
    (item) => !item.completed
  ).length

  const preparedItems = preparednessItems.filter(
    (item) => item.completed
  ).length

  const categories = [
    ...new Set(filteredItems.map((item) => item.category)),
  ]

  const {
    totalItems,
    completedItems,
    progress,
  } = getPreparednessProgress(preparednessItems)

  return (
    <main>
      <section className="preparedness-header">
        <h1>Preparedness</h1>
        <p>
          Build and maintain the essential supplies your household may need
          during an emergency.
        </p>

        <div className="preparedness-progress">
          <div className="progress-info">
            <strong>{progress}% Ready</strong>

            <span>
              {completedItems} of {totalItems} items prepared
            </span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </section>

      <div className="preparedness-categories">
        {categories.map((category) => {
          const categoryItems = filteredItems.filter(
            (item) => item.category === category
          )

          const allCategoryItems = preparednessItems.filter(
            (item) => item.category === category
          )

          const completedCategoryItems = allCategoryItems.filter(
            (item) => item.completed
          ).length

          const categoryProgress =
            allCategoryItems.length === 0
              ? 0
              : Math.round(
                (completedCategoryItems / allCategoryItems.length) * 100
              )


          return (
            <section className="preparedness-category" key={category}>
              <div className="checklist-filters">
                <button
                  type="button"
                  className={filter === 'all' ? 'filter-active' : ''}
                  onClick={() => setFilter('all')}
                >
                  All ({preparednessItems.length})
                </button>

                <button
                  type="button"
                  className={filter === 'pending' ? 'filter-active' : ''}
                  onClick={() => setFilter('pending')}
                >
                  Pending ({pendingItems})
                </button>

                <button
                  type="button"
                  className={filter === 'prepared' ? 'filter-active' : ''}
                  onClick={() => setFilter('prepared')}
                >
                  Prepared ({preparedItems})
                </button>
              </div>

              {filteredItems.length === 0 && (
                <p className="checklist-empty">
                  No items match the selected filter.
                </p>
              )}
              <div className="category-header">
                <div>
                  <h2>{category}</h2>

                  <span>
                    {completedCategoryItems} of {allCategoryItems.length} prepared
                  </span>
                </div>

                <strong>{categoryProgress}%</strong>
              </div>

              <div className="category-progress-bar">
                <div
                  className="category-progress-fill"
                  style={{ width: `${categoryProgress}%` }}
                />
              </div>

              <div className="checklist">
                {categoryItems.map((item) => (
                  <label
                    className={`checklist-item ${item.completed ? 'completed' : ''
                      }`}
                    key={item.id}
                  >
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onChange={() => onToggleItem(item.id)}
                    />

                    <div className="checklist-item-content">
                      <div className="checklist-item-title">
                        <span>{item.name}</span>

                        {item.essential && (
                          <span className="essential-badge">Essential</span>
                        )}
                      </div>

                      {item.description && (
                        <span className="item-description">
                          {item.description}
                        </span>
                      )}

                      {item.recommendation && (
                        <span className="item-recommendation">
                          {item.recommendation}
                        </span>
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </main>
  )
}

export default Preparedness