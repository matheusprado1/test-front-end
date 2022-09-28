import { StyledContainer } from "./styles.jsx";

const Input = ({ label, hint }) => {
  return (
    <StyledContainer>
      <div className="input_container">
        <label className="label">
          {label}
          <strong>*</strong>
        </label>
        <input className="input" />
        <span className="description">{hint}</span>
      </div>
    </StyledContainer>
  );
};

export default Input;
