import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import Counter from "./components/Counter";
import TypedCounter from "./components/TypedCounter";
import ListProducts from './components/products/ListProducts';
//import ViewProducts from "./components/products/ListProducts";
import Login from "./components/auth/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link, Routes, Route, Navigate } from "react-router-dom";
import HooksDemo from "./components/HooksDemo";
import GadgetStore from "./components/gadgets/GadgetStore";


function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>

        <section>
          {/* Views */}
          <Routes>
            <Route path="/home"  element={<Hello title="React"/>} />
            <Route path="/counter"  element={<TypedCounter title="Counter"/>} />
            <Route path="/products"  element={<ListProducts/>} />
            <Route path="/login"  element={<Login/>} />
            <Route path="/hooks"  element={<HooksDemo/>} />
            <Route path="/gadgets"  element={<GadgetStore/>} />
            <Route path="*"  element={<Navigate to='/home'/>} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
