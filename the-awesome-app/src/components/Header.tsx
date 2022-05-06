import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppThemeContext } from '../context/AppThemeContext';
import ThemeSwitcherButton from '../context/ThemeSwitcherButton';


const Header = React.memo(() => {

    const themeContext = useContext(AppThemeContext);

    function setStyle() : string | undefined{
        if(themeContext.state.mode === "dark"){
            return "navbar navbar-expand-lg navbar-dark bg-dark"
        }

        if(themeContext.state.mode === "light"){
            return "navbar navbar-expand-lg navbar-light bg-light"
        }
    }

    return (
        <nav className={setStyle()}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            React
          </a>

          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/counter">
                Counter
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hooks">Hooks</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gadgets">Gadgets Store</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gadgets-cart">View Cart</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/customers">Customers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/error">Error Boundary</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <ThemeSwitcherButton/>
            </li>
          </ul>
        </div>
      </nav>
    );
})


export default Header;