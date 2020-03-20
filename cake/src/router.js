import React, { component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

//pages
import App from "./App";

class test {
  render() {
    return (
      <Router>
        <switch>
          <Route path="/" component={App} />
        </switch>
      </Router>
    );
  }
}

export default test;
