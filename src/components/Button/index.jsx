import { useContext } from "react";
import { ApiContext } from "../../provider/ApiProvider/index.jsx";
import { StyledContainer } from "./styles";

const Button = () => {
  const { setDelay, setTime, setError } = useContext(ApiContext);

  return (
    <StyledContainer>
      <header className="button_title">Para simular erros da api, primeiro clique no botão que deseja testar e depois insira os valores</header>
      <div className="buttons">
        <button className="button"
          onClick={() => {
            setDelay(true);
            setTime(false);
            setError(false);
          }}
        >
          Conexão lenta
        </button>
        <button className="button"
          onClick={() => {
            setDelay(false);
            setTime(true);
            setError(false);
          }}
        >
          Timeout
        </button>
        <button className="button"
          onClick={() => {
            setDelay(false);
            setTime(false);
            setError(true);
          }}
        >
          Sem conexão
        </button>
      </div>
    </StyledContainer>
  );
};

export default Button;
