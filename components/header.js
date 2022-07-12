import styles from "./index.module.css";
import Link from 'next/link';
import { Navbar, Container, Nav, NavDropdown  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import { PersonCircle  } from 'react-bootstrap-icons';

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
                    <Link href={'/'}><Navbar.Brand className={styles.Brand} href="#home">BEC Pvt. Ltd.</Navbar.Brand></Link>
                    <Navbar.Collapse id="basic-navbar-nav" className={styles.navWrapper}>
                      <Nav className={`ms-auto ${styles.navItem}`}>
                        <Nav.Link><Link href={`/`} >Home</Link></Nav.Link>
                        <Nav.Link><Link href={`/projects`} >Projects</Link></Nav.Link>
                        <Nav.Link><Link href={`/about`} >About</Link></Nav.Link>
                        <Nav.Link><Link href={`/contacts`} >Contact</Link></Nav.Link>
                        <Nav.Link><Link href={`/terms-and-conditions`} >Terms</Link></Nav.Link>
                        {/* <Nav.Link><Link href={`/auth`} ><PersonCircle style={{fontSize: '2rem',}} /></Link></Nav.Link> */}
                      </Nav>
                    </Navbar.Collapse>
                    <Link href={`/auth`} ><PersonCircle className={styles.loginIco} style={{fontSize: '2rem',}} /></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  </Container>
                </Navbar>
            </div>
    );

};