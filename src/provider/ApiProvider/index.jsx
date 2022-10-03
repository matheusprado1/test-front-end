import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../service/api";

export const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [calculation, setCalculation] = useState([]);
  const [time, setTime] = useState(false);
  const [error, setError] = useState(false);
  const [delay, setDelay] = useState(false);

  const insertCalculation = (data) => {
    api
      .post("", data)
      .then((response) => {
        setCalculation(response.data);
      })
      .catch((err) => {
        toast.error("Ocorreu um erro, tente novamente.", {});
      });
  };

  const testDelay = (data) => {
    setTimeout(() => {
      toast.warn("Conexão lenta, por favor aguarde!", {});
    });
    api.post("?delay=5000", data).then((response) => {
      setCalculation(response.data);
    });
  };

  const testTime = (data) => {
    api.post("?timeout", data).catch((err) => {
      setTimeout(() => {
        toast.error("Tempo esgotado, tente novamente!", {});
      }, 2000);
    });
  };

  const testError = (data) => {
    api.post("?internalError", data).catch((err) => {
      setTime(() => {
        toast.error("Erro de conexão, tente novamente!", {});
      }, 2000);
    });
  };

  return (
    <ApiContext.Provider
      value={{
        insertCalculation,
        calculation,
        delay,
        time,
        error,
        setCalculation,
        setDelay,
        setError,
        setTime,
        testError,
        testTime,
        testDelay,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
