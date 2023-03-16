import "./search.css";
import React, { Component } from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/home";
import Search from "./search";
import NotFound from "./pages/notFound";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
