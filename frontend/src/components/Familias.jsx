import { useState, useEffect } from "react";
import { Familia } from "./Familia";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import config from "../config";

export function Familias() {
  const [familias, setFamilias] = useState([]);
  const [count, setCount] = useState(0);
  const url = config.apiUrl;

  useEffect(() => {
    searchFamilias();
  }, []);

  function searchFamilias() {
    fetch(url + "/familias")
      .then((res) => res.json())
      .then((data) => {
        setFamilias(data);
        console.log(data);
      });
  }

  return (
    <Container>
      <input className="w-100 mb-2 mt-2" placeholder="Buscar Família"></input>
      <Container className="d-flex flex-wrap">
        {familias.map((familia) => {
          return (
            <Familia
              id={familia.id}
              nome={familia.nome}
              endereco={familia.endereco}
              especificidade={familia.especificidade}
              count={count}
              setCount={setCount}
            />
          );
        })}
      </Container>
    </Container>
  );
}
