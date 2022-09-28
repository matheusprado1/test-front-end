import { StyledContainer } from "./styles";

const Result = () => {
  return (
    <StyledContainer>
      <div className="container">
        <h2 className="title">Você receberá:</h2>
        <p className="text">Amanhã:</p>
        <strong className="strong">R$ 0,00</strong>
        <p className="text">Em 15 dias:</p>
        <strong className="strong">R$ 0,00</strong>
        <p className="text">Em 30 dias:</p>
        <strong className="strong">R$ 0,00</strong>
        <p className="text">Em 90 dias:</p>
        <strong className="strong">R$ 0,00</strong>
      </div>
    </StyledContainer>
  );
};

export default Result;
