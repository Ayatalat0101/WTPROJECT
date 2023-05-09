import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Logo from './images/GIRLS__1_-removebg-preview2.png';
import styles from '../styles/Header.module.css';
function Header() {
  return (
    <div className={styles.Header}>
      <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand >
          <a href="/Home">
            <img className={styles.Logo} src={Logo} alt='logo'/>
        </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={styles.nav}>
            <Nav.Link className={styles.NavLink} href='/Home'><div>Home</div></Nav.Link>
            <Nav.Link className={styles.NavLink} href='/AboutUs' >About Us</Nav.Link>
            <Nav.Link className={styles.NavLink} href='/CalltUs' >Call Us</Nav.Link>
            <NavDropdown title="Our services" id="collasible-nav-dropdown">
              <NavDropdown.Item href='/Marketing' className={styles.NavDropdownitem}>Marketing</NavDropdown.Item>
              <NavDropdown.Item href='/Webdesign' className={styles.NavDropdownitem}>Graphic Design</NavDropdown.Item>
              <NavDropdown.Item href='/GraphicDesign' className={styles.NavDropdownitem}>Web design</NavDropdown.Item>    
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;

