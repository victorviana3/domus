// import "./App.css";
import Header from "./components/Header";

function App({ component }) {
  return (
    <div className="">
      <Header />
      {component}
    </div>
  );
}

export default App;
