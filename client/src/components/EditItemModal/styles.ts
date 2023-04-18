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

  .icon {
    position: absolute;
    font-size: 30px;
    right: 0;
    cursor: pointer;

    &:active {
      transform: scale(0.9);
    }
  }
`
export const ModalForm = styled.form`
  padding: 30px;
  height: 100%;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`
export const FormIputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`
export const FormInputLabel = styled.label`
  font-weight: 600;
`
export const FormInput = styled.input`
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 2px;
  text-align: center;

  &[type='date'] {
    cursor: text;
  }
`
export const FormSelect = styled.select`
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 6px;
  text-align: center;
`
export const FormOption = styled.option`
`
export const FormButton = styled.button`
  width: 80%;
  color: white;
  background: blue;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  padding: 2px 10px;
  align-self: center;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`