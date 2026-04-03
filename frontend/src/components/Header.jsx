import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../assets/logo.png";
import LogoPastoral from "../assets/pastoral-familiar-brasil-seeklogo.png";

export default function Header() {
  return (
    <div className="div-header">
      <img src={Logo} height="40px"></img>
      <ul>
        <li>Início</li>
        <Link to="/familias">
          <li>Familias</li>
        </Link>
        <Link to="/pessoas">
          <li>Pessoas</li>
        </Link>
        <li>Eventos</li>
      </ul>
      <img src={LogoPastoral} height="40px" />
    </div>
  );
}
