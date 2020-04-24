import React from "react"
import "./App.css";
import Nav from "./Nav";
import Content from "./Content";
import Survey from "./Survey";
import LogIn from "./LogIn";
import Media from "./Media";
import Api from "./Api";
import Grid from "./Grid";
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
          <Route path="/Media" component={Media} />
          <Route path="/Api" component={Api} />
          <Route path="/Grid" component={Grid} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Welcome To Notrix</h1>
    <form className={"getin"}>
      <p>username:</p>
      <input type={Text}></input>
      <p>Password:</p>
      <input type={Text}></input>
      <button>Submit</button>
    </form>
    <LogIn />
  </div>
);

export default App;
