import React from 'react';
import './App.css';
import Nav from './Nav';
import Shop from './Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <switch>
          <Route path="/" exact component={Home} />
          <Route path="/Shop" component={Shop} />
          <Route path="/Home" Component={Home} />
        </switch>
      </div>
    </Router >
  );
}

export default App;

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
)
