import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Logo from './images/GIRLS__1_-removebg-preview2.png';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <div className={styles.Header}>
      <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#Homes">
          <a href="#Homes">
            <img className={styles.Logo} src={Logo}/>
        </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={styles.NavLink} ><div>Home</div></Nav.Link>
            <Nav.Link className={styles.NavLink}  >About Us</Nav.Link>
            <Nav.Link className={styles.NavLink}  >Call Us</Nav.Link>
            <NavDropdown title="Our services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className={styles.NavDropdownitem}><>Marketing</></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className={styles.NavDropdownitem} >Graphic Design</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className={styles.NavDropdownitem}>Web design</NavDropdown.Item>    
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;

