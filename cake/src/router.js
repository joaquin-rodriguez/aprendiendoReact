import React, { component, Component } from "react";
import "/pages/poems";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

//pages
import App from "./App";
import poems from "./poems";

class router extends Component {
  render() {
    return (
      <Router>
        <switch>
          <Route path="/" component={App} />
          <Route path="/poems" component={StorePoems} />
        </switch>
      </Router>
    );
  }
}

export default test;
