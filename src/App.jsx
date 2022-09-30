import "./App.css";
import { ToastContainer } from "react-toastify";
import Home from "./pages/home";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Home />
    </>
  );
}

export default App;
