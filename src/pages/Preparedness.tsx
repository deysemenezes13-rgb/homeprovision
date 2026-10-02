import { useEffect, useState } from 'react'
import { initialPreparednessItems } from '../data/preparednessItems'
import type { PreparednessItem } from '../types/PreparednessItem'
import './Preparedness.css'

function Preparedness() {
  const [preparednessItems, setPreparednessItems] = useState<
    PreparednessItem[]
  >(() => {
    const savedItems = localStorage.getItem('homeprovision-preparedness')

    if (!savedItems) {
      return initialPreparednessItems
    }

    const parsedItems: PreparednessItem[] = JSON.parse(savedItems)

    return initialPreparednessItems.map((initialItem) => {
      const savedItem = parsedItems.find(
        (item) => item.id === initialItem.id
      )

      return {
        ...initialItem,
        completed: savedItem?.completed ?? false,
      }
    })
  })

  useEffect(() => {
    localStorage.setItem(
      'homeprovision-preparedness',
      JSON.stringify(preparednessItems)
    )
  }, [preparednessItems])

  const handleToggleItem = (id: string) => {
    setPreparednessItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    )
  }

  const categories = [
    ...new Set(preparednessItems.map((item) => item.category)),
  ]

  const completedItems = preparednessItems.filter(
    (item) => item.completed
  ).length


  const progress =
    preparednessItems.length === 0
      ? 0
      : Math.round(
        (completedItems / preparednessItems.length) * 100
      )

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
              {completedItems} of {preparednessItems.length} items prepared
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
          const categoryItems = preparednessItems.filter(
            (item) => item.category === category
          )
          const completedCategoryItems = categoryItems.filter(
            (item) => item.completed
          ).length

          const categoryProgress =
            categoryItems.length === 0
              ? 0
              : Math.round(
                (completedCategoryItems / categoryItems.length) * 100
              )

          return (
            <section className="preparedness-category" key={category}>
              <div className="category-header">
                <div>
                  <h2>{category}</h2>

                  <span>
                    {completedCategoryItems} of {categoryItems.length} prepared
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
                      onChange={() => handleToggleItem(item.id)}
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