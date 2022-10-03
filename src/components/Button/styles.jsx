import styled from "styled-components";

export const StyledContainer = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .button_title {
    font-size: 12px;
    font-weight: 700;
    color: #656565;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    gap: 1rem;

    .button {
      cursor: pointer;
      width: 130px;
      height: 35px;
      border: 1px solid #d1dce3;
      border-radius: 4px;
      font-weight: 700;
      color: #5d9cec;
      background-color: #fff;
      transition: 0.5s;

      &:hover {
        color: #656565;
        background-color: #5d9cec;
      }
    }
  }
  @media (min-width: 768px) {
    width: 750px;
  }
`;
