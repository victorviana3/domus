import { useState, useEffect } from "react";
import {
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
  Modal,
} from "react-bootstrap";
import config from "../config";

export function AdicionarFamilia() {
  const [especificidadeId, setEspecificidadeId] = useState([]);
  const [especificidades, setEspecificidades] = useState([]);
  const [showEspecificidadeModal, setShowEspecificidadeModal] = useState(false);
  const apiUrl = config.apiUrl;

  useEffect(() => {
    getEspecificidade();
  }, []);

  function getEspecificidade() {
    fetch(`${apiUrl}/especificidades`)
      .then((res) => res.json())
      .then((data) => setEspecificidades(data));
  }
  async function adicionarFamilia(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    if (data.especificidadeId === "null") delete data.especificidadeId;
    console.log(data);
    console.log(JSON.stringify(data));

    const res = await fetch(`${apiUrl}/familia`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log(res);
  }

  function ModalAdicionarEspecificidade(props) {
    function adicionarEspecificidade(event) {
      event.preventDefault();
      const form = event.currentTarget;
      const formData = new FormData(form);

      const data = Object.fromEntries(formData.entries());
      console.log(JSON.stringify(data));

      fetch(`${apiUrl}/especificidade`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then((res) => console.log(res));
    }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Adicionar Especificidade
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={adicionarEspecificidade}>
            <Form.Group controld="formAdicionarEspecificidade">
              <Form.Label>Qual a especificidade?</Form.Label>
              <Form.Control
                name="tipo"
                type="text"
                placeholder="Insira a especificidade"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Cadastrar
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <Container>
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
          <Row className="d-flex">
            <Col>
              <Form.Label className="mt-3">Especificidade Familiar</Form.Label>
              <Form.Select className="w-75" name="especificidadeId">
                <option value="null">Nenhuma</option>
                {especificidades.map((especificidade) => {
                  return (
                    <option value={especificidade.id}>
                      {especificidade.tipo}
                    </option>
                  );
                })}
              </Form.Select>
            </Col>
            <Col className="align-self-end">
              <Button
                variant="success"
                onClick={() =>
                  setShowEspecificidadeModal(!showEspecificidadeModal)
                }
              >
                +
              </Button>
            </Col>
          </Row>
        </Form.Group>
        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
      <ModalAdicionarEspecificidade
        show={showEspecificidadeModal}
        onHide={() => setShowEspecificidadeModal(false)}
      />
    </Container>
  );
}
