import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget";
import { NavLink, Link, useLinkClickHandler } from "react-router-dom";
import { NavbarBrand } from 'react-bootstrap';

function NavBar({ categories = [] }) {
  return (
    <div className="divBar">
      <Navbar.Brand as={Link} to="/" className='logo'>
      TRIPLEX
      </Navbar.Brand>
      <nav className="nav-bar">
        <NavDropdown title="Categorías">
          {categories.map((category) => (
            <NavDropdown.Item
              as={NavLink}
              to={`/category/${category}`}
              key={category}
            >
              {category}
            </NavDropdown.Item>
          ))}
        </NavDropdown>
      </nav>
      <CartWidget />
    </div>
  );
}

export default NavBar;


