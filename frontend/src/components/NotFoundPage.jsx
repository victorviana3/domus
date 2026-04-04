import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div>
      <p>Essa página não existe</p>
      <Link to={"/"}>
        <button className="btn btn-success">Página Inicial</button>
      </Link>
    </div>
  );
}
