import styled from "styled-components";

export const GraphOverlay = styled.section`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  inset: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`
export const PieGraph = styled.div`
  position: absolute;
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
  width: 500px;
  height: 400px;
  border-radius: 8px;

  .icon {
    position: absolute;
    font-size: 30px;
    right: 0;
    z-index: 2;
    cursor: pointer;

    &:active {
      transform: scale(0.9);
    }
  }
`