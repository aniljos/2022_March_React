import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import Counter from "./components/Counter";
import TypedCounter from "./components/TypedCounter";
//import ListProducts from './components/products/ListProducts';
import ViewProducts from "./components/products/ListProducts";
import Login from "./components/auth/Login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            React
          </a>

          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Counter
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default App;
