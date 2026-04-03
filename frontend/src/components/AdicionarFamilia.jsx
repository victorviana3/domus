import { useState, useEffect } from "react";

export function AdicionarFamilia() {
  const [especificidadeId, setEspecificidadeId] = useState([]);
  const [especificidades, setEspecificidades] = useState([]);
  useEffect(() => {
    getEspecificidade();
  }, []);

  function getEspecificidade() {
    fetch("http://localhost:3000/especificidades")
      .then((res) => res.json())
      .then((data) => setEspecificidades(data));
  }
  function adicionarFamilia(formData) {}
  return (
    <div>
      <form action={adicionarFamilia}>
        <input name="nome"></input>
        <input name="endereco"></input>
        <select
          value={especificidadeId}
          onChange={(e) => setEspecificidadeId(e.target.value)}
        >
          {especificidades.map((especificidade) => {
            return (
              <option value={especificidade.id}>{especificidade.tipo}</option>
            );
          })}
        </select>
      </form>
    </div>
  );
}
