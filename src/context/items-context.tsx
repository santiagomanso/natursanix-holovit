import { Item } from '@/types/interfaces'
import React, { createContext, useState } from 'react'

interface ItemsContextI {
  selectedItem: Item
  handleChangeItem: (amount: number, discount: number) => void
}

const initialContext: ItemsContextI = {
  selectedItem: {
    id: 1,
    amount: 3,
    discount: 0.15,
    text: '3 unidades', //TODO - add to buying-buttons
    bestOffer: true, //TODO - add to buying-buttons
    originalPrice: 89.95, //TODO - add to buying-buttons
  },
  handleChangeItem: (amount: number, discount: number): void => {}, // TODO - rework more parameters
}

export const ItemsContext = createContext<ItemsContextI>(initialContext)

export const ItemsProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedItem, setSelectedItem] = useState<Item>(
    initialContext.selectedItem,
  )

  const handleChangeItem = (amount: number, discount: number): void => {
    setSelectedItem((prev) => {
      return {
        ...prev,
        amount: amount,
        discount: discount,
      }
    })
  }

  const data: ItemsContextI = {
    selectedItem,
    handleChangeItem,
  }

  if (!ItemsContext) return 'initialize context'
  return <ItemsContext.Provider value={data}>{children}</ItemsContext.Provider>
}
