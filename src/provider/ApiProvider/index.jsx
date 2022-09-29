import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../service/api";

export const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [calculation, setCalculation] = useState([]);

  const insertCalculation = (data) => {
    api
      .post("", data)
      .then((response) => {
        setCalculation(response.data);
      })
      .catch((err) => {
        toast("Ocorreu um erro.", {
          className: "toastify-color-progress-error",
        });
      });
  };

  return (
    <ApiContext.Provider
      value={{
        calculation,
        setCalculation,
        insertCalculation,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
