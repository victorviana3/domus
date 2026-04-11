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
import { toast } from "react-toastify";

export function AdicionarFamilia() {
  const [especificidadeId, setEspecificidadeId] = useState([]);
  const [especificidades, setEspecificidades] = useState([]);
  const [formData, setFormData] = useState({
    nome: "",
    endereco: "",
    especificidadeId: "",
  });
  const [showEspecificidadeModal, setShowEspecificidadeModal] = useState(false);
  const apiUrl = config.apiUrl;

  useEffect(() => {
    getEspecificidade();
  }, []);

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function getEspecificidade() {
    try {
      const res = await fetch(`${apiUrl}/especificidades`);
      if (res.ok) {
        const data = await res.json();
        setEspecificidades(data);
      } else {
        toast.error("Erro ao carregar as especificidades");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function adicionarFamilia(event) {
    event.preventDefault();
    const data = formData;
    if (data.especificidadeId === "null") delete data.especificidadeId;
    try {
      const res = await fetch(`${apiUrl}/familia`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        (toast.success("Família adicionada com sucesso"),
          setFormData({
            nome: "",
            endereco: "",
            especificidadeId: null,
          }));
        await getEspecificidade();
      } else {
        toast.error("Erro na criação no banco de dados");
      }
    } catch {
      (error) => console.log(error);
    }
  }
  function ModalAdicionarEspecificidade(props) {
    async function adicionarEspecificidade(event) {
      event.preventDefault();
      const form = event.currentTarget;
      const formData = new FormData(form);

      const data = Object.fromEntries(formData.entries());
      console.log(JSON.stringify(data));
      try {
        const response = await fetch(`${apiUrl}/especificidade`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        response.ok
          ? toast.success("Especificidade adicionada com sucesso")
          : toast.error("Erro na adição da especificidade");
      } catch {
        (error) => console.log(error);
      } finally {
        setShowEspecificidadeModal(false);
      }
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
            <Form.Group controlId="formAdicionarEspecificidade">
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
        <Form.Group controlId="formAdicionarFamilia">
          <Form.Label>Nome da Familia</Form.Label>
          <Form.Control
            name="nome"
            type="text"
            placeholder="Insira o nome da Família"
            onChange={handleChange}
            value={formData.nome}
            required
          />
          <Form.Label>Endereço</Form.Label>
          <Form.Control
            name="endereco"
            type="text"
            placeholder="Insira o endereço da familia"
            onChange={handleChange}
            value={formData.endereco}
            required
          />
          <Row className="d-flex">
            <Col>
              <Form.Label className="mt-3">Especificidade Familiar</Form.Label>
              <Form.Select
                className="w-75"
                name="especificidadeId"
                value={formData.especificidadeId}
                onChange={handleChange}
              >
                <option value="null">Nenhuma</option>
                {especificidades.map((especificidade) => {
                  return (
                    <option key={especificidade.id} value={especificidade.id}>
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
