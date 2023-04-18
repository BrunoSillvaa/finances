import styled from "styled-components";

export const Form = styled.form`
  background-color: #fff;
  width: 100%;
  box-shadow: 0 0 5px #ccc;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 15px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const InputLabel = styled.label`
  font-weight: 600;
`
export const Input = styled.input`
  padding: 2px;
  border-radius: 6px;
  border: 1px solid #ccc;
  text-align: center;
`
export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SelectLabel = styled.label`
  font-weight: 600;
`
export const Select = styled.select`
  width: 100px;
  padding: 2px;
  border-radius: 6px;
  border: 1px solid #ccc;
  text-align: center;
  cursor: pointer;
`
export const SelectOption = styled.option`
`
export const FormButton = styled.button`
  color: #fff;
  background-color: blue;
  padding: 2px 10px;
  border: none;
  font-weight: 500;
  font-size: 15px;
  border-radius: 8px;
  align-self: end;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.95);
  }
`