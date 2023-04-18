import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
export const Header = styled.header`
  width: 100%;
  height: 180px;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1`
  color: #fff;
  height: 50%;
`;
export const Body = styled.main`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 150px;
  gap: 20px;

  .graph-icon {
    height: 100%;
    width: 50px;
    padding: 10px;
    background: white;
    cursor: pointer;

    &:active {
      transform: scale(0.9);
    }
  }

  @media (max-width: 500px) {
    margin-top: 15px;
  }
`;
export const PieGraphDiv = styled.section`
  width: 300px;
  height: 300px;
  grid-column: 2;
`
