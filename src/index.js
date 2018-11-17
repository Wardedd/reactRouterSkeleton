import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./index.scss";
import "./index.css";
import ChildComponent from "./Components/comp/index.js";
import NewChildComponent from "./Components/newcomp/index.js";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={() => <div>asd</div>} />
        <Switch>
          <Route exact path="/comp" component={ChildComponent} />
          <Route exact path="/newcomp" component={NewChildComponent} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
