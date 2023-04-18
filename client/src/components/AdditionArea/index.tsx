import { Form, FormButton, Input, InputLabel, InputWrapper, Select, SelectLabel, SelectOption, SelectWrapper } from './styles'
import {useContext, useState} from 'react'
import { Item } from '../../types/item'
import api from '../../services/api'
import { itemListContext } from '../../context/itemListContext'
import { filterListByMonth } from '../../helpers/dateFilter'

export default () => {
  const {filterItems } = useContext(itemListContext)

  const [date, setDate] = useState('')
  function handleSetDate(event: any) {
    event.preventDefault()
    const [year, month, day] = event.target.value.split('-')
    setDate(`${day}/${month}/${year}`)
  }

  const [title, setTitle] = useState('')
  function handleSetTitle(event: any) {
    event.preventDefault()
    setTitle(event.target.value)
  }

  const [value, setValue] = useState(0)
  function handleSetValue(event: any) {
    event.preventDefault()
    setValue(event.target.value)
  }

  const [expense, setExpense] = useState(0)
  function handleSetExpense(event: any) {
    event.preventDefault()
    if (event.target.value === 'Lucro') {
      setExpense(0)
    } else {
      setExpense(1)
    }
  }

  const item = {
    date,
    title,
    value,
    expense
  }

  const handleAddItem = (item: any, event: any) => {
    event.preventDefault()
    api.setItem(item).then(() => {filterItems()})
  }

  return (
    <Form onSubmit={() => {handleAddItem(item, event)}}>
      <InputWrapper>
        <InputLabel htmlFor='date-input'>Data</InputLabel>
        <Input id='date-input' type="date" onChange={handleSetDate}/>
      </InputWrapper>

      <InputWrapper>
        <InputLabel htmlFor='title-input'>Título</InputLabel>
        <Input id='title-input' type="text" onChange={handleSetTitle}/>
      </InputWrapper>

      <InputWrapper>
        <InputLabel htmlFor='value-input'>Preço</InputLabel>
        <Input id='value-input' type="number" onChange={handleSetValue}/>
      </InputWrapper>

      <SelectWrapper>
        <SelectLabel htmlFor='select'>Tipo</SelectLabel>
        <Select id='select' onChange={() => {handleSetExpense(event)}}>
          <SelectOption defaultChecked value='Lucro'>Lucro</SelectOption>
          <SelectOption value='Despesa'>Despesa</SelectOption>
        </Select>
      </SelectWrapper>

      <FormButton type='submit'>Adicionar</FormButton>
    </Form>
  )
}