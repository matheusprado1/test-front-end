import styled from "styled-components";

export const StyledContainer = styled.div`
  .container {
    display: flex;
    flex-wrap: nowrap;
    border: 2px solid #e6e6e6;
  }
  .title {
    margin-top: 25%;
    padding: 5%;
    font-size: 22px;
    color: #333333;
  }

  .subtitle {
    font-style: italic;
    border-bottom: 1px solid blue;
    color: blue;
  }

  .result{
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 23% 0%;
    background-color: #fff;
  }
`;
