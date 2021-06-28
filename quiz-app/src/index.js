import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../src/views/Home/Home.js";
import Quiz from "../src/views/Quiz/Quiz.js";
import Analysis from "../src/views/Analysis/Analysis.js";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "../src/redux/store.js";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/analysis" component={Analysis} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
