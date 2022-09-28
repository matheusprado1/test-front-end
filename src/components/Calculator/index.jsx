import { StyledContainer } from "./styles.jsx";

import Input from "../Input/index.jsx";

const Calculator = () => {
  return (
    <StyledContainer>
      <div className="container">
        <div className="column">
          <header>
            <div className="title">Simule sua Antecipação</div>
          </header>
          <Input/>
        </div>
        <div className="column2">
          <label></label>
        </div>
      </div>
    </StyledContainer>
  );
};
export default Calculator;
