import "../App.css";
import "../css/style.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { useState, useEffect } from "react";
import { Article, ArticlesContainer } from "./Article";
import { typedFetch } from "../scripts/utils";

interface HeaderProps {
  tags: string[];
  onSelectTag: (tag: string) => void;
}

const Header = () => {
  const [categories, setCategories] = useState<string[]>([""]);

  useEffect(() => {
    typedFetch<ArticlesContainer>("/api/").then((data) => {
      const uniqueCategories = new Set();
      data.articles.forEach((item) => {
        item.tags.forEach((tag) => uniqueCategories.add(tag));
      });
      setCategories([...uniqueCategories] as string[]);
    });
  }, []);

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
          <LinkContainer to={"/"}>
            <Nav.Link>Le Procrastinateur</Nav.Link>
          </LinkContainer>
        </h1>
      </div>
      <Navbar bg="light" data-bs-type="light" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {categories.map((tag) => (
                <LinkContainer key={tag} to={`/category/${tag}`}>
                  <Nav.Link>{tag}</Nav.Link>
                </LinkContainer>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
