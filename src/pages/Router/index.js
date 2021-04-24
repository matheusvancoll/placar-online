import React, { useState } from 'react'
import './ConfigPlacar.css'
import { Switch, Route, Link } from 'react-router-dom'

import PlacarOnline from '../Placar'

function RouterDirect () {
  const initialName = {
    timeA: 'Time A',
    timeB: 'Time B'
  }

  const [NomeTime, setNomeTime] = useState(initialName)

  function nomeiaTime(ev) {
    const { name, value } = ev.target
    setNomeTime({ ...NomeTime, [name]: value})
  }

  return(
    <Switch>
      <Route exact path="/">
        <div className="config-placar__container">
          <div className="title__container">
            <h1>Insira as informações da partida</h1>
          </div>
          <form className="info-partida-form">
            <input type="text" placeholder="Nome do time A" name="timeA" id="timeA" onChange={nomeiaTime}/>
            <input type="text" placeholder="Nome do time B" name="timeB"id="timeB" onChange={nomeiaTime}/>
          </form>
          <Link to="/placar">
            <button id="start" type="button">Iniciar Partida!</button>
          </Link>
        </div>
      </Route>

      <Route exact path="/placar">
        <PlacarOnline timeA={NomeTime.timeA} timeB={NomeTime.timeB} />
      </Route>
    </Switch>
  )
}

export default RouterDirect