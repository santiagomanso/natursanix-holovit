import { ItemsContext } from '@/context/items-context'
import { itemsArray } from '@/data/array-items'
import { Item } from '@/types/interfaces'
import { useContext } from 'react'

export default function BuyingButtons() {
  const { selectedItem, handleChangeItem } = useContext(ItemsContext)

  console.log('selectedItem', selectedItem)

  const isSelected = (item: Item) => {
    return selectedItem.id === item.id
  }

  return (
    <div className='flex items-center justify-between gap-5 w-full'>
      {itemsArray.map((item) => {
        return (
          <div key={item.id}>
            <button
              className={`bg-white text-primaryGreen border-2  border-primaryGreen hover:bg-primaryGreen text-xl font-bold flex flex-col items-center hover:text-white p-2 transition-all duration-75 active:translate-y-1 hover:shadow-md hover:shadow-green-950 relative rounded-md`}
              onClick={() => handleChangeItem(item.amount, item.discount)}
            >
              {item.bestOffer && (
                <span className='absolute pointer-events-none -top-7 text-sm text-accentRed'>
                  mejor oferta
                </span>
              )}
              <span>{item.text}</span>
              <span>{`${(item.discount * 100).toFixed(0)}%`} de descuento</span>
            </button>
          </div>
        )
      })}
    </div>
  )
}
