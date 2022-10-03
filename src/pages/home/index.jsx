import Calculator from "../../components/Calculator";
import Result from "../../components/Result";
import Button from "../../components/Button";
import { StyledContainer } from "./styles";

const Home = () => {
  return (
    <StyledContainer>
      <div className="main_container">
        <Calculator />
        <Result />
      </div>
      <Button />
    </StyledContainer>
  );
};

export default Home;
