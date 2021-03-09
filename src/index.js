import "./index.css";

import App from "./app";
import AuthService from "./service/auth_service";
import Common from "./style/Common";
import React from "react";
import ReactDOM from "react-dom";
import Reset from "./style/Reset";
import { ThemeProvider } from "styled-components";

const authService = new AuthService();

ReactDOM.render(
  <ThemeProvider theme={Common}>
    <Reset />
    <App authService={authService} />
  </ThemeProvider>,
  document.getElementById("root")
);
