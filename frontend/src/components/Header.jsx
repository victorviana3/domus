import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import Logo from "../assets/logo.png";
import LogoPastoral from "../assets/pastoral-familiar-brasil-seeklogo.png";

export default function Header() {
  return (
    <div className="container-fluid">
      <Nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img src={Logo} height="40px"></img>
        <ul className="navbar-nav me-auto my-2 my-lg-0">
          <Nav.Link as={Link} to="/">
            <li className="nav-item">Início</li>
          </Nav.Link>
          <Nav.Link as={Link} to="/familias">
            <li className="nav-item">Familias</li>
          </Nav.Link>
          <Nav.Link as={Link} to="/pessoas">
            <li className="nav-item">Pessoas</li>
          </Nav.Link>
          <Nav.Link as={Link} to="/eventos">
            <li className="nav-item">Eventos</li>
          </Nav.Link>
        </ul>
        <img src={LogoPastoral} height="40px" />
      </Nav>
    </div>
  );
}
