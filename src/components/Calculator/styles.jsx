import styled from "styled-components";

export const StyledContainer = styled.div`
  .calculator_container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
  }
  .title {
    color: #656565;
    font-size: 15px;
    font-weight: 700;
  }

  .form {
    width: 70%;
    height: 80%;
    display: flex;
    flex-direction: column;
  }

  .subtitle {
    font-style: italic;
    border-bottom: 1px solid #5d9cec;
    color: #3d75bb;
  }

  .column {
    display: flex;
    flex-direction: column;
    height: 280px;
    justify-content: space-around;
    background: #fff;
  }

  @media (min-width: 768px) {
    width: 450px;
    height: 100%;
    .column {
      padding-left: 0px;
    }
    .title {
      font-size: 22px;
    }
    .form {
      .subtitle {
        font-size: 1.75rem;
        height: 37px;
      }
    }
  }
`;
