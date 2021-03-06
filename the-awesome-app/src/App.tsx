import React, {Suspense} from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import Counter from "./components/Counter";
import TypedCounter from "./components/TypedCounter";

//import ViewProducts from "./components/products/ListProducts";
import Login from "./components/auth/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link, Routes, Route, Navigate } from "react-router-dom";
import HooksDemo from "./components/HooksDemo";
import GadgetStore from "./components/gadgets/GadgetStore";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import ViewCart from "./components/gadgets/ViewCart";
import Header from "./components/Header";
import ErrorBoundaryDemo from "./components/ErrorBoundaryDemo";
import ListCustomers from "./components/customers/ListCustomers";
import AppErrorBoundary from "./components/errorBoundary/AppErrorBoundary";

//static 
//import ListProducts from './components/products/ListProducts';

//dynamic--code-splitting
const ListProducts = React.lazy(() => import('./components/products/ListProducts'));

function App(props: any) {
  return (
    <Router>
      <div className="container">

        <Header onChangeMode={props.onChangeMode}/>

        <section>
          {/* Views */}
          <AppErrorBoundary>
              <Suspense fallback="Loading...">
              <Routes>
                <Route path="/home"  element={<Hello title="React"/>} />
                <Route path="/counter"  element={<TypedCounter title="Counter"/>} />
                <Route path="/products"  element={<ListProducts/>} />
                <Route path="/login"  element={<Login/>} />
                <Route path="/hooks"  element={<ProtectedRoute> <HooksDemo/></ProtectedRoute>} />
                <Route path="/gadgets"  element={<GadgetStore/>} />
                <Route path="/gadgets-cart"  element={<ViewCart/>} />
                <Route path="/error"  element={<ErrorBoundaryDemo/>} />
                <Route path="/customers"  element={<ListCustomers/>} />
                <Route path="*"  element={<Navigate to='/home'/>} />
              </Routes>
              </Suspense>
          </AppErrorBoundary>
        </section>
      </div>
    </Router>
  );
}

export default App;
