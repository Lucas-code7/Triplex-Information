import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget"
import { NavLink } from "react-router"

function NavBar({categories}) {
    return(
        <div className="divBar">
        <p className="logo">TRIPLEX</p>
        <nav className="nav-bar">
        <NavDropdown title="categorias"> 
            {categories.map(category =>(
                <NavDropdown.Item 
                as={NavLink} 
                to={'/category/${category}'}
                 key={category}
                 >
                    {category}
                </NavDropdown.Item>
            ))}
            </NavDropdown>
        </nav>
        <CartWidget/>
        </div>
    )

}

export default NavBar