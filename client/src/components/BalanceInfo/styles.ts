import styled from "styled-components";

export const BalanceInfo = styled.section`
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 5px #ccc;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`
export const MonthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  flex-wrap: nowrap;

  .icon {
    cursor: pointer;

    &:active {
    transform: scale(0.9);
    }
  }
`
export const Month = styled.h2`
  min-width: 160px;
  font-size: 16px;
  text-align: center;
`
export const ValuesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  gap: 10px;
  font-weight: 500;
`