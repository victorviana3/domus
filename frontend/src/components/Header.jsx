import { Link } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import Logo from "../assets/logo.png";
import LogoPastoral from "../assets/pastoral-familiar-brasil-seeklogo.png";

export default function Header() {
  return (
    <Navbar expand="sm" bg="light">
      <Container className="mx-auto">
        <img src={Logo} height="40px"></img>
        <Navbar.Brand>DOMUS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mb-0">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <NavDropdown title="Familias" id="navdropdown">
              <NavDropdown.Item as={Link} to="/familias">
                Listar
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/adicionar/familia">
                Cadastrar
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pessoas" id="pessoas-dropdown">
              <NavDropdown.Item as={Link} to="/pessoas">
                Listar
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/adicionar/pessoa">
                Cadastrar
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="">
              Eventos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <img src={LogoPastoral} height="40px" />
      </Container>
    </Navbar>

    // <div className="container-fluid">
    //   <Nav class="navbar navbar-expand-sm navbar-light bg-light">
    //     <img src={Logo} height="40px"></img>
    //     <ul className="navbar-nav me-auto my-2 my-lg-0">
    //       <Nav.Link as={Link} to="/">
    //         <li className="nav-item">Início</li>
    //       </Nav.Link>
    //       <li className="nav-item dropdown">
    //         Familias
    //         <ul className="">
    //           <Nav.Link
    //             className="dropdown-toggle dropdown-item"
    //             to="/cadastrar/familia"
    //           >
    //             <li className="dropdown-item">Cadastrar</li>
    //           </Nav.Link>
    //         </ul>
    //       </li>

    //       <Nav.Link as={Link} to="/pessoas">
    //         <li className="nav-item">Pessoas</li>
    //       </Nav.Link>
    //       <Nav.Link as={Link} to="/eventos">
    //         <li className="nav-item">Eventos</li>
    //       </Nav.Link>
    //     </ul>
    //     <img src={LogoPastoral} height="40px" />
    //   </Nav>
    // </div>
  );
}
