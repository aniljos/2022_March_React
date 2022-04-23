import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Counter from './components/Counter';
import TypedCounter from './components/TypedCounter';
//import ListProducts from './components/products/ListProducts';
import ViewProducts from './components/products/ListProducts';
import Login from './components/auth/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      

      <section>
        {/* <Hello title="Hello"/>
        <Hello /> */}
        
        {/* <Counter title="Counter"/> */}
        {/* <Counter title="The Count"/> */}
        {/* <TypedCounter title='Typed Counter'/> */}

        {/* <ViewProducts/> */}
        <Login/>

      </section>
    </div>
  );
}

export default App;
