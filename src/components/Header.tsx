import "../App.css";
import "../css/style.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

interface HeaderProps {
  tags: string[];
  onSelectTag: (tag: string) => void;
}

const Header = ({ tags, onSelectTag }: HeaderProps) => {
  return (
    <div className="col container-fluid g-0 sticky-top align-items-center ">
      <div className="container-fluid g-0 text-center">
        <h1
          className="mb-0"
          style={{
            backgroundColor: "blueviolet",
            color: "white",
            fontFamily: "DreamOrphans",
            fontSize: "4em",
          }}
        >
          Le Procrastinateur
        </h1>
      </div>
      <Navbar bg="light" data-bs-type="light" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {tags.map((tag) => (
                <Nav.Link
                  href={"#" + tag}
                  key={tag}
                  onClick={() => onSelectTag(tag)}
                >
                  {tag}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
