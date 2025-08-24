import CartWidget from "./CartWidget"


function NavBar() {
    return(
        <div className="divBar">
        <p className="logo">TRIPLEX</p>
        <nav className="nav-bar">
        <ul className="listaNav">
            <li><a href="#">PC Armadas</a></li>
            <li><a href="#">Componentes</a></li>
            <li><a href="#">Monitores</a></li>
        </ul>
        </nav>
        <CartWidget/>
        </div>
    )

}

export default NavBar