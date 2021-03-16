import "./index.css";

import App from "./app";
import AuthService from "./service/auth_service";
import CardRepository from "./service/card_repository"
import Common from "./style/Common";
import ImageFileInput from "./components/image_file_input/image_file_input"
import React from "react";
import ReactDOM from "react-dom";
import Reset from "./style/Reset";
import { ThemeProvider } from "styled-components";
import UploadService from "./service/upload_service";

const cardRepository = new CardRepository();
const authService = new AuthService();
const uploadService = new UploadService();
const FileInput = props => (<ImageFileInput {...props} uploadService={uploadService} />)

ReactDOM.render(
  <ThemeProvider theme={Common}>
    <Reset />
    <App authService={authService} FileInput={FileInput} cardRepository={cardRepository}/>
  </ThemeProvider>,
  document.getElementById("root")
);
