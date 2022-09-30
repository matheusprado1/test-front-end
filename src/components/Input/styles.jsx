import styled from "styled-components";

export const StyledContainer = styled.div`
  .input_container {
    padding: 3%;
    display: flex;
    flex-direction: column;
  }

  .label {
    font-size: 13px;
    color: #333;
    text-align: left;
  }

  .error {
    font-size: 10px;
    color: red;
    font-weight: 200;
  }

  .input {
    height: 30px;
    width: 150px;
    border-radius: 4px;
    padding: 0px 5px 0px 12px;
    border: 1px solid #dde6e9;
    outline-color: #66afe9;
  }

  @media (min-width: 768px) {
    .input {
      height: 37px;
      width: 240px;
    }
    .label{
      font-size: 14px;
    }
  }

  .description {
    font-weight: 100;
    font-size: 10px;
    color: #333333;
  }
`;
