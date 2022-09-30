import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .main_container {
    width: 200%;
    height: 50%;
    border: 1px solid #d1dce3;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      width: 750px;
      height: 400px;
      flex-direction: row;
    }
    .main_container {
      width: 90%;
      height: 800px;
    }
  }
  @media (min-width: 768px) {
    height: 100vh;
    width: 100vw;
  }
`;
