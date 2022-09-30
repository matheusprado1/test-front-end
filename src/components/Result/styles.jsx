import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .result {
    width: 50%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media (min-width: 768px) {
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .result_container {
    line-height: 1.8;
    font-style: italic;
    color: #5d9cec;
  }

  .result_title {
    font-style: italic;
    color: #5d9cec;
    border-bottom: 2px solid #5d9cec;
    font-size: 16px;
  }

`;
