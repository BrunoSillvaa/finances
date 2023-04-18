import { createContext, useState, useEffect } from "react";
import { Item } from "../types/item";
import { Container } from "../App.styles";
import api from "../services/api";
import { getCurrentMonth, filterListByMonth} from '../helpers/dateFilter'

export const itemListContext = createContext<any>(null)

export function ItemListProvider({children}: any) {
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [items, setItems] = useState<Item[]>([])
  const [filteredItems, setFilteredItems] = useState<Item[]>([])
  
  useEffect(() => {
    filterItems()
  }, [])

  useEffect(() => {
    filterItems()
  }, [currentMonth])
  
  // Fetch all items from DB
  const fetchDataBase = async () => {
    const allItems: Item[] = await api.getItems()
    return allItems
  }

  // Filter items by the currenty month
  const filterItems = () => {
    fetchDataBase()
      .then((allItems: Item[]) => {
        const newList = filterListByMonth(allItems, currentMonth)
        setFilteredItems( newList )
      })
      .catch((err) => console.log(err))
  }

  const value = {
    items,
    filteredItems,
    currentMonth,
    setCurrentMonth,
    filterItems
  }

  return (
    <itemListContext.Provider value={value}>
      <Container>
        {children}
      </Container>
    </itemListContext.Provider>
  )
}