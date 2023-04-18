import { Item } from "../types/item"
import Api from '../services/api.js'

export const items: Item[] = [
  {date: new Date(2023, 3, 5), category: 'food', title: 'McDonals', value: 50},
  {date: new Date(2023, 3, 6), category: 'rent', title: 'Aluguel', value: 2300},
  {date: new Date(2023, 3, 4), category: 'food', title: 'Burguer King', value: 20},
  {date: new Date(2023, 3, 4), category: 'salary', title: 'Salário', value: 3500},
]