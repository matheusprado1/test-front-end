import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ApiContext } from "../../provider/ApiProvider/index.jsx";

import { StyledContainer } from "./styles.jsx";

import Input from "../Input/index.jsx";

const Calculator = () => {
  const {
    insertCalculation,
    delay,
    error,
    time,
    testDelay,
    testError,
    testTime,
  } = useContext(ApiContext);

  const schema = yup.object().shape({
    amount: yup
      .number()
      .typeError("Campo obrigatório")
      .required("Campo obrigatório")
      .min(1000, "Valor mínimo de R$ 1.000,00"),
    installments: yup
      .number()
      .typeError("Campo obrigatório")
      .required("Campo obrigatório")
      .max(12, "Valor máximo de 12 parcelas"),
    mdr: yup
      .number()
      .typeError("Campo obrigatório")
      .required("Campo obrigatório")
      .min(1, "Valor mínimo de 1%"),
  });

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (obj) => {
    if (delay) {
      testDelay(obj);
      setValue("amount", "");
      setValue("installments", "");
      setValue("mdr", "");
    } else if (error) {
      testError(obj);
      setValue("amount", "");
      setValue("installments", "");
      setValue("mdr", "");
    } else if (time) {
      testTime(obj);
      setValue("amount", "");
      setValue("installments", "");
      setValue("mdr", "");
    } else {
      insertCalculation(obj);
      setValue("amount", "");
      setValue("installments", "");
      setValue("mdr", "");
    }
  };

  return (
    <StyledContainer>
      <div className="calculator_container">
        <div className="column">
          <header>
            <div className="title">Simule sua Antecipação</div>
          </header>
          <form onChange={handleSubmit(onSubmitFunction)} className="form">
            <Input
              label="Informe o valor da venda *"
              placeholder="Ex: R$ 1000,00"
              register={register}
              name="amount"
              error={errors.amount?.message}
            />
            <Input
              label="Em quantas parcelas *"
              placeholder="Ex: 3"
              hint={"Máximo de 12 parcelas"}
              register={register}
              name="installments"
              error={errors.installments?.message}
            />
            <Input
              label="Informe o percentual de MDR *"
              placeholder="Ex: 2%"
              register={register}
              name="mdr"
              error={errors.mdr?.message}
            />
          </form>
        </div>
      </div>
    </StyledContainer>
  );
};
export default Calculator;
