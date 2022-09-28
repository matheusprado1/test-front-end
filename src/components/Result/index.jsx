import { StyledContainer } from "./styles";

const Result = ({ days, value }) => {
  return (
    <StyledContainer>
      <div className="container">
        <p className="text">{days}</p>
        <strong className="strong">R$ {value}</strong>
      </div>
    </StyledContainer>
  );
};

export default Result;
