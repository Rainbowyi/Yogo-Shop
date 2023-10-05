// import * as styles from './Header.css';
// import logoImg from '../../assets/images/timbertop-icon.png'
// import useAuth from '../../hooks/useAuth'
// import TuButton from '../common/TuButton';
// import TuLink from '../common/TuLink';


// import { Container, Navbar, Nav } from "react-bootstrap";
// import { RiShoppingCartFill } from 'react-icons/ri';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Mirabel World</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '150px' }}
            navbarScroll
          >
            <Nav.Link href="store/products">Products</Nav.Link>
            <Nav.Link href="#action2">OnSales</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
            <div>
              <Link to="signup"><Button  className='btn btn-info'>Sign In </Button></Link>
          
              <Link to="login"><Button className='btn btn-info'>Log In </Button></Link>
          </div>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
  // return (
    
    // <Navbar className={styles.navbar} variant="light" expand="lg" sticky="top">
    //   <Container>
    //     <Navbar.Brand className={styles.brandLink} as={Link} to='/'>
          
    //       <div className={styles.logoTextBox}>
    //         <span className={styles.brand}>Mirabel World</span>
    //         <span className={styles.brandSub}>The Fashion Online Clothes Store</span>
    //       </div>
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls='responsive-navbar-nav' />
    //     <Navbar.Collapse id='responsive-navbar-nav'>
    //       {/* STANDARD NAVLINKS */}
    //       <Nav className='me-auto'>
    //         <Nav.Link className={styles.navLink} as={Link} to='/store/products'>Products</Nav.Link>
    //       </Nav>
    //       {/* AUTH NAVLINKS */}
    //       <Nav >
    //         {!user && <TuLink to='/signup'>Sign&nbsp;Up</TuLink>}
    //         {!user && <TuLink to="/login"  >Log&nbsp;In</TuLink>}
    //         {user && <TuLink to="/dashboard" >Dashboard</TuLink>}
    //         {user && <TuButton onClick={() => { logout() }}>Logout</TuButton>}
    //         {<TuButton><RiShoppingCartFill /></TuButton>}
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
//   );
// };

// export default Header;
