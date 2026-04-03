import "./Familia.css";

export function Familia({ id, nome, endereco, especificidade }) {
  return (
    <div className="box-familia">
      <div className="div-nome-familia">{nome}</div>
      <div className="div-familia-data">
        id: {id} endereco: {endereco} {especificidade ? "especificidade" : ""}
      </div>
    </div>
  );
}
