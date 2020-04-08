import React from "react";
import "./App.css";
import Nav from "./Nav";
import Content from "./Content";
import Survey from "./Survey";
import LogIn from "./LogIn";
import About from "./About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "@testing-library/react";
import bootstrap from "react-bootstrap";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/content" component={Content} />
          <Route path="/survey" component={Survey} />
          <Route path="/About" component={About} />

        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Welcome To Notrix</h1>
    <LogIn />
  </div>
);

export default App;
