import { StyledContainer } from "./styles.jsx";

const Input = () => {
  return (
    <StyledContainer>
      <form className="form_input">
        <div className="input">
          <label className="subtitle_input">
            Informe o valor da venda
            <strong>*</strong>
          </label>
          <input type="number" className="input1" />
        </div>
        <div className="input">
          <label className="subtitle_input">
            Em quantas parcelas:
            <strong>*</strong>
          </label>
          <input type="number" className="input1" />
          <small className="small">Máximo de 12 parcelas</small>
        </div>
        <div classname="input">
          <label className="subtitle_input">
            Informe o percentual de MDR
            <strong>*</strong>
          </label>
          <input type="number" className="input1" />
        </div>
      </form>
    </StyledContainer>
  );
};

export default Input;