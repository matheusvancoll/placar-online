import './App.css';
import PlacarOnline from './pages/Placar'
import ConfigPlacarOnline from './pages/ConfigPlacar'

function App() {
  return (
    <div className="App">
      <ConfigPlacarOnline />
      <PlacarOnline timeA="AMIGOS DO TIME" timeB="ACADÊMICOS DO SALGUEIRO" />
    </div>
  );
}

export default App;
