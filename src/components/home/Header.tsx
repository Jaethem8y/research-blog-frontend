import { Navbar, Nav, Container } from "react-bootstrap";
import "../../styles/header.scss";

export default function Header() {
  return (
    <>
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="sm"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand>
            <h1 className="header-brand">API & DB </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/" className="header-nav">
                Home
              </Nav.Link>
              <Nav.Link href="/api" className="header-nav">
                API
              </Nav.Link>
              <Nav.Link href="/db" className="header-nav">
                DB
              </Nav.Link>
              <Nav.Link href="/UI" className="header-nav">
                UI
              </Nav.Link>
              <a
                href="https://4yjz4qhd61.execute-api.us-east-2.amazonaws.com/dev/docs"
                target="_blank"
                rel="noreferrer"
                className="header-a-github text-secondary header-nav"
              >
                docs
              </a>
              <a
                href="https://github.com/Jaethem8y/bankapi-serverless"
                target="_blank"
                rel="noreferrer"
                className="header-a-github text-secondary header-nav"
              >
                Github
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
