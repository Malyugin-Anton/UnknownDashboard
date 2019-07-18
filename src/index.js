import React from 'react'
import { render } from 'react-dom'
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom'

import './style.scss'

import Home from './pages/Home'
import Info from './pages/Info'

render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/info" component={Info} />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
)
