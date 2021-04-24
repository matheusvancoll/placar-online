import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import PlacarOnline from './Placar/index'
import ConfigPlacar from './ConfigPlacar'

function RouterDirect () {

  return(
    <Switch>
      <Route exact path="/">
        <ConfigPlacar />
      </Route>
      <Route exact path="/placar">
        <PlacarOnline timeA="time a" timeB="time b" />
      </Route>
    </Switch>
  )
}

export default RouterDirect