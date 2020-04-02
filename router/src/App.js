import React from "react";
import "./App.css";
import Nav from "./Nav";
import Content from "./Content";
import Survey from "./Survey";
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
        </Switch>
        <render>
          <div className="news">
            <h3>News</h3>
            <h4>Stay Up To Date On The Latest New About Notrix!</h4>
            <p>
              Notrix has implemented a new and revolutionary survey were you can
              enter your info for no reason whatsoever!{" "}
            </p>
          </div>
          <img
            className="medical"
            src="https://image.freepik.com/free-vector/medical-stuff-elements-background_18591-37024.jpg"
          ></img>
        </render>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Welcome To Notrix</h1>
  </div>
);

export default App;
