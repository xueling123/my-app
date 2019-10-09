import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import * as serviceWorker from "../serviceWorker";
import Entrance from "./entrance/index.jsx";
import Login from "./login/login.jsx";
// import 'antd-mobile/dist/antd-mobile.css';
import './assets/App.less';
ReactDOM.render(
  <BrowserRouter>
    <Route path='/entrance' component={Entrance} />
    <Route path='/login' component={Login} />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
