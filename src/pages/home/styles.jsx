import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .main_container {
    width: 20%;
    height: 22%;
    border: 1px solid #d1dce3;
    border-radius: 4px;
    display: flex;
    /* flex-direction: column; */
    @media (min-width: 800px) {
      width: 608px;
      height: 389px;
      flex-direction: row;
    }
  }
`;
