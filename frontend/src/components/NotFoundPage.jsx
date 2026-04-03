import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div>
      <p>Essa página não existe</p>
      <Link to={"/"}>
        <button>Página Inicial</button>
      </Link>
    </div>
  );
}
