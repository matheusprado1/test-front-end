import { StyledContainer } from "./styles.jsx";

import Input from "../Input/index.jsx";
import Result from "../Result/index.jsx";

const Calculator = () => {
  return (
    <StyledContainer>
      <div className="main_container">
        <div className="column">
          <header>
            <div className="title">Simule sua Antecipação</div>
          </header>
          <form action="" className="form">
            <Input label="Informe o valor da venda" />
            <Input label="Em quantas parcelas" hint="Máximo de 12 parcelas" />
            <Input label="Informe o percentual de MDR" />
          </form>
        </div>
        <div className="column2">
          <div className="result">
            <h2 className="subtitle">VOCÊ RECEBERÁ:</h2>
            <Result days="Amanhã" value="0,00" />
            <Result days="Em 15 dias" value="0,00" />
            <Result days="Em 30 dias" value="0,00" />
            <Result days="Em 90 dias" value="0,00" />
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};
export default Calculator;
