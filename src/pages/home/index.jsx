import Calculator from "../../components/Calculator";
import Result from "../../components/Result";
import { StyledContainer } from "./styles";

const Home = () => {
  return (
    <StyledContainer>
      <div className="main_container">
        <Calculator />
        <Result />
      </div>
    </StyledContainer>
  );
};

export default Home;
