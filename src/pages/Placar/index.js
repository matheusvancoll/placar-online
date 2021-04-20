import React, { useEffect } from 'react'
import { useState } from 'react'
import './Placar.css'

function PlacarOnline(props){
  const [GolsTimeA, setGolsTimeA] = useState(0)
  const [GolsTimeB, setGolsTimeB] = useState(0)

  const [Timer, setTimer] = useState(0)
  const [TimerOn, setTimerOn] = useState(false)

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

  function confirmarReset() {
    let confirmReset = window.confirm("Deseja realmente reiniciar o Cronômetro?")
    if(confirmReset){
      setTimer(0)
      setTimerOn(false)
    }
  }
  
  useEffect(() => {
    let interval = null

    if(TimerOn){
      interval = setInterval(() => {
        setTimer(prevTime => prevTime + 100)
      },100)
    }else{
      clearInterval(interval)
    }

    return () => clearInterval(interval)

  }, [TimerOn])
  
  return(
    <div className="placar__container">
      
      <div className="placar__time a">
        <h1>{props.timeA}</h1>
        <h3>{GolsTimeA}</h3>
        <button type="button" className="gol-validado" onClick={marcarGolsTimeA}>Goooooool</button>
        <button type="button" className="gol-cancelado" onClick={anularGolsTimeA}>Cancelar Gol</button>
      </div>
      
      <div className="tempo__container">
        <h1>TEMPO:</h1>
        <div className="tempo__contador">
          <span>{("0" + Math.floor((Timer / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((Timer / 1000) % 60)).slice(-2)}</span>
        </div>
        <button type="button" className="btnTimer" onClick={() => setTimerOn(true)}>Começar</button>
        <button type="button" className="btnTimer" onClick={() => setTimerOn(false)}>Pausar</button>
        <button type="button" className="btnTimer" onClick={confirmarReset}>Reiniciar</button>
      </div>

      <div className="placar__time b">
        <h1>{props.timeB}</h1>
        <h3>{GolsTimeB}</h3>
        <button type="button" className="gol-validado" onClick={marcarGolsTimeB}>Goooooool</button>
        <button type="button" className="gol-cancelado" onClick={anularGolsTimeB}>Cancelar Gol</button>
      </div>

    </div>
  )
}

export default PlacarOnline