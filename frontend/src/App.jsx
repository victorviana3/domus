// import "./App.css";
import Header from "./components/Header";
import { ToastContainer, toast } from "react-toastify";

function App({ component }) {
  return (
    <div className="">
      <Header />
      {component}
      <ToastContainer position="top-right" autoClose={5000} theme="light" />
    </div>
  );
}

export default App;
