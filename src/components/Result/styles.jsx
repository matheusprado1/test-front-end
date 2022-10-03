import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .result {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .result_container {
    font-style: italic;
    color: #5d9cec;
    line-height: 30px;;
  }

  .result_title {
    font-style: italic;
    font-weight: 900;
    color: #5d9cec;
    border-bottom: 1px solid #5d9cec;
    font-size: 16px;
  }
  .total{
    font-weight: 900;
  }

  @media (min-width: 768px) {
    width: 231px;
    height: 100%;
    display: flex;
    flex-direction: column;
    .result_title {
      width: 159px;
    }
    .result_container {
      line-height: 46px;
    }
  }
`;
