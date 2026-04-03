import { useState } from "react";
import "./App.css";
import { Familias } from "./components/Familias";
import Header from "./components/Header";

function App({ component }) {
  return (
    <div className="main-div">
      <Header />
      {component}
    </div>
  );
}

export default App;
