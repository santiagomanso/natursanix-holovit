import { itemsArray } from '@/data/array-items'
import { Item } from '@/types/interfaces'
import React, { createContext, useState } from 'react'

interface ItemsContextI {
  selectedItem: Item
  handleChangeItem: (item: Item) => void
}

const selectedItem = itemsArray[0]

const initialContext: ItemsContextI = {
  selectedItem,
  handleChangeItem: (item: Item): void => {}, // TODO - rework more parameters
}

export const ItemsContext = createContext<ItemsContextI>(initialContext)

export const ItemsProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedItem, setSelectedItem] = useState<Item>(
    initialContext.selectedItem,
  )

  const handleChangeItem = (item: Item): void => {
    setSelectedItem(item)
  }

  const data: ItemsContextI = {
    selectedItem,
    handleChangeItem,
  }

  if (!ItemsContext) return 'initialize context'
  return <ItemsContext.Provider value={data}>{children}</ItemsContext.Provider>
}
