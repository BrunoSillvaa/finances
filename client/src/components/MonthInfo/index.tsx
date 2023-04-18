import { 
  IconsContainer,
  Table,
  TableContainer,
  TableItem,
  TableItemInfo,
  TableItemValue
} from "./styles";
import { Item } from "../../types/item";
import { useContext, useState } from "react";
import { itemListContext } from "../../context/itemListContext";
import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa'
import EditItemModal from '../EditItemModal'
import DeleteItemModal from "../DeleteItemModal";

export default () => {
  interface Items {
    filteredItems: Item[],
    filterItems: () => void
  }
  const { filteredItems, filterItems }: Items = useContext(itemListContext)

  const [itemSelected, setItemSelected] = useState<any>()
  const [isOpenEditModal, setIsOpenEditModal] = useState(false)
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)

  const editItem = (item: Item) => {
    setItemSelected(item)
    setIsOpenEditModal(true)
  }

  const deleteItem = (item: Item) => {
    setItemSelected(item)
    setIsOpenDeleteModal(true)
  }

  return (
    <>
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th style={{width: '150px'}}>Data</th>
            <th style={{width: 'auto'}}>Título</th>
            <th style={{width: '150px'}}>Preço</th>
            <th style={{width: '150px'}}>Edit</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item, index) => (
            <TableItem key={index}>
              <TableItemInfo>{item.date}</TableItemInfo>

              <TableItemInfo>{item.title}</TableItemInfo>

              <TableItemValue expense={!!item.expense}>R$ {item.value}</TableItemValue>

              <IconsContainer>
                <FaRegEdit
                 onClick={() => {editItem(item)}}
                 className="icon"
                />
                
                <FaRegTrashAlt
                 onClick={() => {deleteItem(item)}}
                 className="icon"
                />
              </IconsContainer>
            </TableItem>
          ))}
        </tbody>
      </Table>
    </TableContainer>

    {isOpenEditModal && <EditItemModal props={{itemSelected, setIsOpenEditModal, filterItems}}/>}
    {isOpenDeleteModal && <DeleteItemModal props={{setIsOpenDeleteModal, itemSelected, filterItems}}/>}
    </>
  );
}
