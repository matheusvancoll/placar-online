import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
    let confirmReset = window.confirm("Deseja realmente reiniciar?")
    if(confirmReset){
      setTimer(0)
      setTimerOn(false)
    }
  }

  function resetAll() {
    confirmarReset()
    setGolsTimeA(0)
    setGolsTimeB(0)
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
      <div className="tempo__container">
        <div className="tempo__contador">
          <h1>TEMPO:</h1>
          <span>{("0" + Math.floor((Timer / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((Timer / 1000) % 60)).slice(-2)}</span>
        </div>
        <button type="button" id="btnStart" onClick={() => setTimerOn(true)}>Começar</button>
        <button type="button" id="btnPause" onClick={() => setTimerOn(false)}>Pausar</button>
        <button type="button" id="btnResume" onClick={confirmarReset}>Reiniciar</button>
      </div>

      <div className="times__container">
        <div className="placar__time a">
          <h1>{props.timeA}</h1>
          <h4>{GolsTimeA}</h4>
          <button type="button" className="gol-validado" onClick={marcarGolsTimeA}>Gooooool</button>
          <button type="button" className="gol-cancelado" onClick={anularGolsTimeA}>Cancelar Gol</button>
        </div>

        <div className="divisor">
          <h1>x</h1>
        </div>

        <div className="placar__time b">
          <h1>{props.timeB}</h1>
          <h4>{GolsTimeB}</h4>
          <button type="button" className="gol-validado" onClick={marcarGolsTimeB}>Gooooool</button>
          <button type="button" className="gol-cancelado" onClick={anularGolsTimeB}>Cancelar Gol</button>
        </div>
      </div>

      <div className="placar__reset">
        <Link to="/">
          <button type="button">Iniciar novo jogo</button>
        </Link>
        <button type="button" onClick={resetAll}>Reiniciar Partida</button>
      </div>
    </div>
  )
}

export default PlacarOnline