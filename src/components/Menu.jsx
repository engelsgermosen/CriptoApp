import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import "../styles/Menu.css";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMenuItemClick = (path) => {
    setIsMenuOpen(false);
    navigate(path); 
  };

  return (
    <header className="header-hero">
      <nav className="main-menu">
        <NavLink className="menu-link" to="/">
          <div className="logo">
            <h1>EGmarket</h1>
          </div>
        </NavLink>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`menu-list ${isMenuOpen ? "menu-list--open" : ""}`}>
          <li className="menu-item">
            <NavLink
              to="/"
              className="menu-link"
              onClick={() => handleMenuItemClick("/")}
            >
              Inicio
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to="/criptomonedas"
              className="menu-link"
              onClick={() => handleMenuItemClick("/criptomonedas")}
            >
              Lista de criptomonedas
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
