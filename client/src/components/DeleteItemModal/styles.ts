import styled from "styled-components";

export const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  inset: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ModalContainer = styled.div`
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
  position: relative;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .icon {
    position: absolute;
    font-size: 30px;
    top: 0;
    right: 0;
    cursor: pointer;

    &:active {
      transform: scale(0.9);
    }
  }
`
export const ModalTitle = styled.h2`
  font-weight: 500;
  font-size: 20px;
`
export const ButtonsWrapper = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
`
export const CancelButton = styled.button`
  background: green;
  color: white;
  width: 40%;
  font-weight: 500;
  font-size: 15px;
  padding: 2px 10px;
  border: none;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  
  &:active {
    transform: scale(0.9);
  }
`
export const DeleteButton = styled.button`
  background: red;
  color: white;
  width: 40%;
  font-weight: 500;
  font-size: 15px;
  padding: 2px 10px;
  border: none;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  
  &:active {
    transform: scale(0.9);
  }
`