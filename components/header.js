import styles from "./index.module.css";
import { Navbar, Container, Nav, NavDropdown  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default function Header(){

    return(
        <div className={styles.Header}>
              <div className={styles.topbar}>
                <span>
                  +91-9040091803
                </span>
                <span>
                  mail@baishnodevbuilder.com
                </span>
              </div>
              <Navbar className={styles.Navbar} bg="transparent" expand="lg">
                  <Container>
                    <Navbar.Brand className={styles.Brand} href="#home">BAISHNODEV</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className={styles.navWrapper}>
                      <Nav className={`ms-auto ${styles.navItem}`}>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Projects</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">Blog</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
            </div>
    );

};