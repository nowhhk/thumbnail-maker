import './app.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './components/login/login'
import Maker from './components/maker/maker'

function App({authService}) {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/">
          <Login authService={authService}/>
        </Route>
        <Route path="/maker">
          <Maker authService={authService}/>
        </Route>
      </BrowserRouter>
    </div>
  )
}

export default App;
