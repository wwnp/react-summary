import ReactDOM from "react-dom";
import { React } from "react";
import { App } from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

const test = "test";
ReactDOM.render(
  <BrowserRouter>
    <App test={test} />
  </BrowserRouter>,
  document.getElementById("root")
);
