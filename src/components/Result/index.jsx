import { useContext } from "react";
import { ApiContext } from "../../provider/ApiProvider/index.jsx";
import { StyledContainer } from "./styles";

const Result = () => {
  const { calculation } = useContext(ApiContext);

  return (
    <StyledContainer>
      <>
        <div className="result">
          <h2 className="result_title">VOCÊ RECEBERÁ:</h2>
        </div>
        <div className="result_container">
          <span className="days">Amanhã: </span>
          <span className="total">
            {calculation.length === 0 ? "R$ 0,00" : `R$ ${calculation[1]},00`}
          </span>
        </div>
        <div className="result_container">
          <span className="days">Em 15 dias: </span>
          <span className="total">
            {calculation.length === 0 ? "R$ 0,00" : `R$ ${calculation[15]},00`}
          </span>
        </div>
        <div className="result_container">
          <span className="days">Em 30 dias: </span>
          <span className="total">
            {calculation.length === 0 ? "R$ 0,00" : `R$ ${calculation[30]},00`}
          </span>
        </div>
        <div className="result_container">
          <span className="days">Em 90 dias: </span>
          <span className="total">
            {calculation.length === 0 ? "R$ 0,00" : `R$ ${calculation[90]},00`}
          </span>
        </div>
      </>
    </StyledContainer>
  );
};

export default Result;
