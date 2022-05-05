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
import ProtectedRoute from "./components/auth/ProtectedRoute";
import ViewCart from "./components/gadgets/ViewCart";
import Header from "./components/Header";


function App() {
  return (
    <Router>
      <div className="container">

        <Header/>

        <section>
          {/* Views */}
          <Routes>
            <Route path="/home"  element={<Hello title="React"/>} />
            <Route path="/counter"  element={<TypedCounter title="Counter"/>} />
            <Route path="/products"  element={<ProtectedRoute> <ListProducts/></ProtectedRoute>} />
            <Route path="/login"  element={<Login/>} />
            <Route path="/hooks"  element={<ProtectedRoute> <HooksDemo/></ProtectedRoute>} />
            <Route path="/gadgets"  element={<GadgetStore/>} />
            <Route path="/gadgets-cart"  element={<ViewCart/>} />
            <Route path="*"  element={<Navigate to='/home'/>} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
