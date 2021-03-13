import "./app.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./components/login/login";
import Maker from "./components/maker/maker";
import styled from "styled-components";

function App({ authService }) {
  return (
    <Background>
      <BrowserRouter>
        <Route exact path="/">
          <Login authService={authService} />
        </Route>
        <Route path="/maker">
          <Maker authService={authService} />
        </Route>
      </BrowserRouter>
    </Background>
  );
}

export default App;

//styled-component

const Background = styled.div`
  background-color: ${(props) => props.theme.color.makerShadow};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
