import ReactDOM from "react-dom";
import { React } from "react";
import { App } from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
const test = "test";
ReactDOM.render(
  <BrowserRouter>
    <App test={test} />
  </BrowserRouter>,
  document.getElementById("root")
);
