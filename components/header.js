import styles from "./index.module.css";
import Link from 'next/link';
import { Navbar, Container, Nav, NavDropdown  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useRouter } from 'next/router'

import { PersonCircle  } from 'react-bootstrap-icons';

function getCookie() {
  let name = "id=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
      c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
      }
  }
  return null
} 

export default function Header(){

    const router = useRouter();

    return(
        <div className={styles.Header}>
              <div className={styles.topbar}>
                <span>
                +91-9437018183
                </span>
                <span>
                  info@baishnodevbuilder.com
                </span>
              </div>
              <Navbar className={styles.Navbar} bg="transparent" expand="lg">
                  <Container>
                    <Link href={'/'}><Navbar.Brand className={styles.Brand} href="#home">Baishnodevi Builder</Navbar.Brand></Link>
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
                    <PersonCircle className={styles.loginIco} style={{fontSize: '2rem',}} onClick={()=>{
                      if(!getCookie()){
                        alert("For our existing customers only.")
                      }
                      router.push(`/myprojects`);
                    }} />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  </Container>
                </Navbar>
            </div>
    );

};