// Styled Components
import {Header, Title, Body} from './App.styles'
import { FiPieChart } from 'react-icons/fi'
// Components
import BalanceInfo from './components/BalanceInfo'
import AdditionArea from './components/AdditionArea'
import MonthInfo from './components/MonthInfo'
// Context
import { ItemListProvider } from './context/itemListContext'
import PieGraph from './components/PieGraph'

function App() {
  return (
    <ItemListProvider>
      <Header>
        <Title>Sistema Financeiro</Title>
      </Header>
      <Body>
        <BalanceInfo/>

        <AdditionArea/>

        <MonthInfo/>

      </Body>
    </ItemListProvider>
  )
}

export default App
