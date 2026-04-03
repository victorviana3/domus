import { useState, useEffect } from "react";
import { Familia } from "./Familia";
import { Link } from "react-router-dom";
import "./Familias.css";

export function Familias() {
  const [familias, setFamilias] = useState([]);

  useEffect(() => {
    searchFamilias();
  }, []);

  function searchFamilias() {
    fetch("http://localhost:3000/familias")
      .then((res) => res.json())
      .then((data) => setFamilias(data));
  }

  return (
    <div className="div-familias">
      <Link to="/adicionar/familia">
        <button>+ Adicionar Familia</button>
      </Link>
      <input placeholder="Buscar Família"></input>
      <div className="div-boxes-familias">
        {familias.map((familia) => {
          return (
            <Familia
              id={familia.id}
              nome={familia.nome}
              endereco={familia.endereco}
              especificidade={familia.especificidade}
            />
          );
        })}
      </div>
    </div>
  );
}
