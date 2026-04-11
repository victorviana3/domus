import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import config from "../config";
import { toast } from "react-toastify";

export function Familia({
  id,
  nome,
  endereco,
  especificidade,
  count,
  setCount,
}) {
  const [isLoading, setIsLoading] = useState(false);
  async function apagarFamilia(id) {
    setIsLoading(true);
    const url = config.apiUrl;
    try {
      const response = await fetch(`${url}/familia/${id}`, {
        method: "DELETE",
      });

      response.ok
        ? toast.success("Família Excluída com Sucesso")
        : toast.error("não deletou");
      setCount(count + 1);
    } catch (error) {
      toast(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <Card
      className="m-1"
      style={{
        width: "400px",
        margin: "1rem",
        minWidth: "0",
      }}
    >
      <Card.Body>
        <Link to={`/familia/` + id}>
          <Card.Title>{nome}</Card.Title>
        </Link>
        <Card.Text>
          <Card.Text>Pessoas</Card.Text>
          <Card.Text>Endereço: {endereco}</Card.Text>
          <Card.Text>
            {especificidade?.tipo
              ? `Especificidade: ${especificidade.tipo}`
              : ""}
          </Card.Text>
        </Card.Text>
        <Card.Footer className="d-flex justify-content-around">
          <Button variant="warning">Editar</Button>
          <Button variant="danger" onClick={() => apagarFamilia(id)}>
            Apagar
          </Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}
