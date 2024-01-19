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
    <div className='flex items-center justify-between mt-10 lg:mt-0 px-5 lg:px-0 gap-2 lg:gap-5 w-full'>
      {itemsArray.map((item) => {
        return (
          <div key={item.id}>
            <button
              className={` border-2  border-primaryGreen hover:bg-primaryGreen text-sm lg:text-xl font-bold flex flex-col items-center hover:text-white p-2 transition-all duration-75 active:translate-y-1 hover:shadow-md hover:shadow-green-950 relative rounded-md
              ${
                isSelected(item)
                  ? 'bg-primaryGreen text-white shadow-md shadow-green-950'
                  : 'bg-white text-primaryGreen'
              }`}
              onClick={() => handleChangeItem(item)}
            >
              {item.bestOffer && (
                <span className='absolute pointer-events-none -top-7 text-sm text-accentRed'>
                  mejor oferta
                </span>
              )}
              <span>{item.text}</span>
              <span>
                {`${(item.discount * 100).toFixed(0)}%`}{' '}
                <span className='hidden md:inline'>de</span> descuento
              </span>
            </button>
          </div>
        )
      })}
    </div>
  )
}
