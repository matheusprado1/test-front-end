import styled from "styled-components";

export const StyledContainer = styled.div`
  .main_container {
    display: flex;
    flex-wrap: nowrap;
    border: 1px solid #dde6e9;
  }
  .title {
    margin-top: 12%;
    padding: 5%;
    font-size: 22px;
    color: #333333;
  }

  .subtitle {
    font-style: italic;
    border-bottom: 1px solid #5d9cec;
    color: #3d75bb;
  }

  .result {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 23% 0%;
    background-color: rgba(209, 220, 227, 0.18)
  }

  .column {
    padding: 0 10%;
    width: 25vw;
    background: #fff;
  }

  .column2 {
    width: 20vw;
  }
`;
