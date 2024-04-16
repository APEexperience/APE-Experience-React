import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Servicios from './views/servicios'
import Inicio from './views/inicio'
import SobreMi from './views/sobre-mi'
import APEExperienceEnConstruccin from './views/ape-experience-en-construccin'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Servicios} exact path="/servicios" />
        <Route component={Inicio} exact path="/inicio" />
        <Route component={SobreMi} exact path="/sobre-mi" />
        <Route component={APEExperienceEnConstruccin} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
