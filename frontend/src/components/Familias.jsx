import { useState, useEffect } from "react";
import { Familia } from "./Familia";
import "./Familias.css";

export function Familias() {
  const [familias, setFamilias] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/familias")
      .then((res) => res.json())
      .then((data) => setFamilias(data));
  }, []);
  return (
    <div className="div-familias">
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
  );
}
