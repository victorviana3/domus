import { useState, useEffect } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

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
  function adicionarFamilia(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());
    console.log(JSON.stringify(data));

    fetch("http://localhost:3000/familia", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => console.log(res));
  }
  return (
    <Form onSubmit={adicionarFamilia}>
      <Form.Group controld="formAdicionarFamilia">
        <Form.Label>Nome da Familia</Form.Label>
        <Form.Control
          name="nome"
          type="text"
          placeholder="Insira o nome da Família"
          required
        />
        <Form.Label>Endereço</Form.Label>
        <Form.Control
          name="endereco"
          type="text"
          placeholder="Insira o endereço da familia"
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Cadastrar
      </Button>
    </Form>
    // <div>
    //   <form action={adicionarFamilia}>
    //     <input name="nome"></input>
    //     <input name="endereco"></input>
    //     <select
    //       value={especificidadeId}
    //       onChange={(e) => setEspecificidadeId(e.target.value)}
    //     >
    //       {especificidades.map((especificidade) => {
    //         return (
    //           <option value={especificidade.id}>{especificidade.tipo}</option>
    //         );
    //       })}
    //     </select>
    //   </form>
    // </div>
  );
}
