import styled, { css } from "styled-components";

interface TableItemProps {
  expense?: boolean
}

export const TableContainer = styled.section`
  width: 100%;
  height: 60vh;
  box-shadow: 0 0 5px #ccc;
  border-radius: 4px;
  overflow-y: scroll;
  
  &::-webkit-scrollbar {
    display: none;
  }
`
export const Table = styled.table`
  background-color: #fff;
  width: 100%;
  border-radius: 4px;
  text-align: center;
  padding: 10px;
  border-spacing: 5px;
`
export const TableItem = styled.tr`
`
export const TableItemInfo = styled.td`
  font-weight: 400;
  border-radius: 8px;
  padding: 5px;
`
export const TableItemValue = styled.td<TableItemProps>`
  font-weight: 500;
  ${props => props.expense === true ? css`color: red` : css`color: green`};
`
export const IconsContainer = styled.td`
  height: 35px;
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    color: rgba(0, 0, 0, 0.9);
    font-size: 16px;
    line-height: 35px;
    cursor: pointer;

    &:active {
      transform: scale(0.9);
    }
  }
`