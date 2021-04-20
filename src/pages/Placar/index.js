import React from 'react'
import { useState } from 'react'
import './Placar.css'

function PlacarOnline(props){
  const [Gols, setGols] = useState(0)

  function marcarGols() {
    setGols(Gols + 1)
  }
  
  return(
    <div className="placar__container">
      
      <div className="placar__time a">
        <h1>{props.timeA}</h1>
        <h3>{Gols} Gols</h3>
        <button type="button" className="gol-validado" onClick={marcarGols}>Goooooool</button>
        <button type="button" className="gol-cancelado">Cancelar Gol</button>
      </div>
      
      <div className="placar__tempo">
        <h1>TIME:</h1>
        <h4>45:00:00</h4>
      </div>

      <div className="placar__time b">
        <h1>{props.timeB}</h1>
        <h3>0 GOLS</h3>
        <button type="button" className="gol-validado">Goooooool</button>
        <button type="button" className="gol-cancelado">Cancelar Gol</button>
        
      </div>

    </div>
  )
}

export default PlacarOnline