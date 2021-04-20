import './App.css';
import PlacarOnline from './pages/Placar'
import ConfigPlacarOnline from './pages/ConfigPlacar'

function App() {
  return (
    <div className="App">
      <ConfigPlacarOnline />
      <PlacarOnline timeA="Jurubeba Sport Club" timeB="Matutino Futebol Mananger" />
    </div>
  );
}

export default App;
