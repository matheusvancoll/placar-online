import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ConfigPlacar.css'

const initialTimes = {
  timeA: '',
  timeB: ''
}

const ConfigPlacar = () => {
  const [NomeTime, setNomeTime] = useState(initialTimes)

  function nomeiaTime(ev) {
    const { name,  value } = ev.target
    setNomeTime({ ...NomeTime, [name]: value})
  }

  return(
    <div className="config-placar__container">
      <div className="title__container">
        <h1>Insira as informações da partida</h1>
      </div>
      <form className="info-partida-form">
        <input type="text" placeholder="Nome do time A" name="timeA" id="timeA" onChange={nomeiaTime}/>
        <input type="text" placeholder="Nome do time B" name="timeB"id="timeB"onChange={nomeiaTime}/>
      </form>
        <Link to="/placar">
          <button id="start" type="button">Iniciar Partida!</button>
        </Link>
    </div>
  )
}

export default ConfigPlacar
