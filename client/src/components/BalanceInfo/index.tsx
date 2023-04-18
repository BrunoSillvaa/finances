import { IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'
import { BalanceInfo, Month, MonthContainer, ValuesContainer } from "./styles"
import { formatDate } from "../../helpers/dateFilter"
import {useContext, useState} from 'react'
import { itemListContext } from '../../context/itemListContext'
import { Item } from '../../types/item'
import { FiPieChart } from 'react-icons/fi'
import PieGraph from '../PieGraph'

export default () => {
  interface ItemListContextType {
    currentMonth: string;
    setCurrentMonth: (month: string) => void;
    filteredItems: Item[];
  }

  const {currentMonth, setCurrentMonth, filteredItems}: ItemListContextType = useContext(itemListContext)

  const [isOpenGraph, setIsOpenGraph] = useState(true)

  // Functions to change the current month
  function handleReduce() {
    let [year, month] = currentMonth.split('/')
    const newDate = new Date(+year, (+month - 1) - 1, 1)
    let [newDay, newMonth, newYear] = newDate.toLocaleDateString().split('/')

    setCurrentMonth(`${newYear}/${newMonth}`)
  }

  function handleIncrease() {
    let [year, month] = currentMonth.split('/')
    const newDate = new Date(+year, (+month - 1) + 1, 1)
    let [newDay, newMonth, newYear] = newDate.toLocaleDateString().split('/')

    setCurrentMonth(`${newYear}/${newMonth}`)
  }

  // Functions to sum up income and expenses for the current month
  const balance = sumIncomes() - sumExpense()

  function sumIncomes() {
    let value = 0
    filteredItems.map(item => {
      if (!!item.expense === false) {
        value += item.value
      }
    })

    return value
  }

  function sumExpense() {
    let value = 0
    filteredItems.map(item => {
      if (!!item.expense === true) {
        value += item.value
      }
    })

    return value
  }

  return (
    <>
    <BalanceInfo>
      <MonthContainer>
        <IoIosArrowBack
         className={'icon'}
         onClick={handleReduce}
         size={30}
        />

        <Month>{formatDate(currentMonth)}</Month>
        
        <IoIosArrowForward
         className={'icon'}
         onClick={handleIncrease}
         size={30}
        />
      </MonthContainer>

      <ValuesContainer>
        <strong>Receita:</strong>
        <p style={{color: "green"}}>R$ {sumIncomes()}</p>
      </ValuesContainer>

      <ValuesContainer>
        <strong>Despesas:</strong>
        <p style={{color: "red"}}>R$ {sumExpense()}</p>
      </ValuesContainer>

      <ValuesContainer>
        <strong>Balanço:</strong>
        <p style={{color: `${balance > 0 ? "green" : "red"}`}}>R$ {balance}</p>
      </ValuesContainer>

      <FiPieChart className="graph-icon" onClick={() => setIsOpenGraph(true)}/>
    </BalanceInfo>

    {/* {isOpenGraph && <PieGraph props={{setIsOpenGraph, filteredItems}}/>} */}
    </>
  )
}