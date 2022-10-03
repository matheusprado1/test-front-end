import { StyledContainer } from "./styles.jsx";

const Input = ({ label, hint, register, name, error, span, ...rest }) => {
  return (
    <StyledContainer>
      <div className="input_container">
        <label className="label">
          {label} {!!error && <span className="error">{error}</span>}
        </label>
        <input className="input" {...register(name)} {...rest} />
        <span className="description">{hint}</span>
      </div>
    </StyledContainer>
  );
};

export default Input;
