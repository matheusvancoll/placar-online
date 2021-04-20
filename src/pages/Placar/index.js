import React from 'react'
import { useState } from 'react'
import './Placar.css'

function PlacarOnline(props){
  const [GolsTimeA, setGolsTimeA] = useState(0)
  const [GolsTimeB, setGolsTimeB] = useState(0)

  function marcarGolsTimeA() {
    setGolsTimeA(GolsTimeA + 1)
  }

  function anularGolsTimeA(){
    if(GolsTimeA > 0){
      setGolsTimeA(GolsTimeA - 1)
    } 
  }

  function marcarGolsTimeB() {
    setGolsTimeB(GolsTimeB + 1)
  }

  function anularGolsTimeB(){
    if(GolsTimeB > 0){
      setGolsTimeB(GolsTimeB - 1)
    } 
  }
  
  return(
    <div className="placar__container">
      
      <div className="placar__time a">
        <h1>{props.timeA}</h1>
        <h3>{GolsTimeA} Gols</h3>
        <button type="button" className="gol-validado" onClick={marcarGolsTimeA}>Goooooool</button>
        <button type="button" className="gol-cancelado" onClick={anularGolsTimeA}>Cancelar Gol</button>
      </div>
      
      <div className="placar__tempo">
        <h1>TIME:</h1>
        <h4>45:00:00</h4>
      </div>

      <div className="placar__time b">
        <h1>{props.timeB}</h1>
        <h3>{GolsTimeB} GOLS</h3>
        <button type="button" className="gol-validado" onClick={marcarGolsTimeB}>Goooooool</button>
        <button type="button" className="gol-cancelado" onClick={anularGolsTimeB}>Cancelar Gol</button>
        
      </div>

    </div>
  )
}

export default PlacarOnline