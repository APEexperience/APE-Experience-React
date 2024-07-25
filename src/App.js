
import './App.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import './App.css'
import Contacto from './views/contacto'
import APEExperienceEnConstruccin from './views/ape-experience-en-construccin'
import Blog from './views/blog'
import ViewNewsletter from './views/ViewNewsletter'
import Proyectos from './views/proyectos'
import SolicitarServicio from './views/solicitar-servicio'
import Servicios from './views/servicios'
import Inicio from './views/inicio'
import SobreMi from './views/sobre-mi'
import NotFound from './views/not-found'

function App() {
    return (
        <div className="App">
    <Router>
      <Switch>
        <Route component={Contacto} exact path="/contacto" />
        <Route
          component={APEExperienceEnConstruccin}
          exact
          path="/ape-experience-en-construccin"
        />
        <Route component={Blog} exact path="/blog" />
        <Route component={Proyectos} exact path="/proyectos" />
        <Route component={ViewNewsletter} exact path="/views/ViewNewsletter" />
        <Route component={SolicitarServicio} exact path="/solicitar-servicio" />
        <Route component={Servicios} exact path="/servicios" />
        <Route component={Inicio} exact path="/" />
        <Route component={SobreMi} exact path="/sobre-mi" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>


ReactDOM.render(<App />, document.getElementById('app'))

        </div>
    );
}

export default App;
