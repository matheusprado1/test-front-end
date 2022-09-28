import { StyledContainer } from "./styles.jsx";

import Input from "../Input/index.jsx";
import Result from "../Result/index.jsx";

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
          <Result/>
        </div>
      </div>
    </StyledContainer>
  );
};
export default Calculator;
