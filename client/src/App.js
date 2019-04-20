import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Header from "./views/components/header";
import Description from "./views/components/description";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Header} />
            <Route exact path="/" component={Description} />
            {/* </App><Route exact path="/error" component={Error} /> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
