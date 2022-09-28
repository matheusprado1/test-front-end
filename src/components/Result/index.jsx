import { StyledContainer } from "./styles";

const Result = ({ days, value }) => {
  return (
    <StyledContainer>
      <div>
        <p className="text">
          {days}: <strong>R$ {value}</strong>
        </p>
      </div>
    </StyledContainer>
  );
};

export default Result;
