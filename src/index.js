import "./index.css";

import App from "./app";
import Common from "./style/Common";
import React from "react";
import ReactDOM from "react-dom";
import Reset from "./style/Reset";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <ThemeProvider theme={Common}>
    <Reset />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
