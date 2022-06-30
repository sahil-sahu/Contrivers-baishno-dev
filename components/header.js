import styles from "./index.module.css";
import Link from 'next/link';
import { Navbar, Container, Nav, NavDropdown  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import { PersonFill } from 'react-bootstrap-icons';

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
                        <Nav.Link><Link href={`/`} >Home</Link></Nav.Link>
                        <Nav.Link><Link href={`/projects`} >Projects</Link></Nav.Link>
                        <Nav.Link><Link href={`/about`} >About</Link></Nav.Link>
                        <Nav.Link><Link href={`/contacts`} >Contact</Link></Nav.Link>
                        <Nav.Link><Link href={`/auth`} ><PersonFill style={{fontSize: '2rem',}} /></Link></Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
            </div>
    );

};