import { 
  ModalOverlay,
  ModalContainer,
  CancelButton,
  DeleteButton,
  ModalTitle,
  ButtonsWrapper
} from './styles'
import { GrFormClose } from 'react-icons/gr'
import api from '../../services/api'
import { Item } from '../../types/item'

interface Modal {
  props: {
    setIsOpenDeleteModal: (state: boolean) => void,
    itemSelected: Item,
    filterItems: () => void
  }
}

export default ({props}: Modal) => {
  const {setIsOpenDeleteModal, itemSelected, filterItems} = props

  const deleteItem = () => {
    api.deleteItem(itemSelected.id).then(() => {filterItems()})
    setIsOpenDeleteModal(false)
  }

  const closeModal = () => {
    setIsOpenDeleteModal(false)
  }

  return (
    <ModalOverlay>
      <ModalContainer>
        <GrFormClose className='icon' onClick={closeModal}/>
        <ModalTitle>Deseja realmente excluir ?</ModalTitle>
        <ButtonsWrapper>
          <CancelButton onClick={closeModal}>Cancelar</CancelButton>
          <DeleteButton onClick={deleteItem}>Excluir</DeleteButton>
        </ButtonsWrapper>
      </ModalContainer>
    </ModalOverlay>
  )
}