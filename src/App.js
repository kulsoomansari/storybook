import React from "react";
import Register from "./components/Pages/Register";
import Cart from "./components/Pages/Cart";
import Product from "./components/Pages/Product";
import Home from "./components/Pages/Home";
import AppBar from "./components/Pages/AppBar";
import FirebaseAuth from "./components/Pages/FirebaseAuth";
import './App.css';
// import AddList from './components/AddList';
// import TodoList from './components/AddTodo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div>
      {/* <TodoList /> */}
      {/* <AddList /> */}
      <Router>
        <div>
          <nav>
            <AppBar />
          </nav>
          <Switch>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/login">
            <FirebaseAuth />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
