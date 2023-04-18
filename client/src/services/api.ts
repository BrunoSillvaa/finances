import axios from 'axios'
import { Item } from '../types/item'

export default {
  getItems: async () => {
    const response = await axios.get('http://localhost:5000/api/getItems')
    const data = await response.data
    return data
  },
  setItem: async (item: Item) => {
    const response = await axios.post('http://localhost:5000/api/setItem', item)
    return response.data
  },
  deleteItem: async (itemId: number) => {
    const response = await axios.delete(`http://localhost:5000/api/deleteItem/${itemId.toString()}`)
    return response.data
  },
  editItem: async (item: Item) => {
    const response = await axios.put(`http://localhost:5000/api/editItem/${item.id.toString()}`, item)
    return response.data
  }
}