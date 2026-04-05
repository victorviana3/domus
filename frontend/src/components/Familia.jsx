import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Familia({ id, nome, endereco, especificidade }) {
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
          <p>Pessoas</p>
          <p>Endereço: {endereco}</p>
          <p>{especificidade?.tipo ? especificidade.tipo : ""}</p>
        </Card.Text>
      </Card.Body>
    </Card>
    // <div className="box-familia">
    //   <div className="div-nome-familia">{nome}</div>
    //   <div className="div-familia-data">
    //     id: {id} endereco: {endereco} {especificidade ? "especificidade" : ""}
    //   </div>
    // </div>
  );
}
