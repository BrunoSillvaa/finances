import { ModalOverlay, ModalContainer, ModalForm, FormInput, FormButton, FormIputWrapper, FormInputLabel, FormSelect, FormOption } from './styles'
import { GrFormClose } from 'react-icons/gr'
import { Item } from '../../types/item'
import { updateDate } from '../../helpers/dateFilter'
import api from '../../services/api'

interface ModalInterface {
  props: {
    setIsOpenEditModal: (state: boolean) => void,
    itemSelected: Item,
    filterItems: () => void
  }
}

export default ({props}: ModalInterface) => {
  const {itemSelected, setIsOpenEditModal, filterItems} = props
  const {id, date, title, value, expense} = itemSelected
  
  const editedItem: Item = {
    id,
    date,
    title,
    value,
    expense
  }

  const handleSetExpense = (event: any) => {
    event.preventDefault()
    switch (event.target.value) {
      case 'Lucro': {
        editedItem.expense = 0
        break
      }
      case 'Despesa': {
        editedItem.expense = 1
        break
      }
    }
  }

  const handleUpdateItem = (event: any) => {
    event.preventDefault()

    api.editItem(editedItem).then(() => {filterItems()})
    setIsOpenEditModal(false)
  }

  return (
    <ModalOverlay>
      <ModalContainer>
        <GrFormClose className='icon' onClick={() => {setIsOpenEditModal(false)}}/>

        <ModalForm onSubmit={() => {handleUpdateItem(event)}}>
          <FormIputWrapper>
            <FormInputLabel htmlFor='formDate'>Data</FormInputLabel>
            <FormInput id='formDate' type={'date'} onChange={(e) => {editedItem.date = updateDate(e.target.value)}}/>
          </FormIputWrapper>

          <FormIputWrapper>  
            <FormInputLabel htmlFor='formText'>Titulo</FormInputLabel>
            <FormInput id='formText' type={'text'} placeholder={title} onChange={(e) => {editedItem.title = e.target.value}}/>
          </FormIputWrapper>
    
          <FormIputWrapper>
            <FormInputLabel htmlFor='formValue'>Preço</FormInputLabel>
            <FormInput id='formValue' type={'number'} placeholder={value.toString()} onChange={(e) => {editedItem.value = +e.target.value}}/>
          </FormIputWrapper>

          <FormIputWrapper>
            <FormInputLabel htmlFor='formSelect'>Tipo</FormInputLabel>
            <FormSelect id='formSelect' onChange={handleSetExpense}>
              <FormOption>Lucro</FormOption>
              <FormOption>Despesa</FormOption>
            </FormSelect>
          </FormIputWrapper>

          <FormButton type={'submit'}>Alterar</FormButton>
        </ModalForm>
      </ModalContainer>
    </ModalOverlay>
  )
}