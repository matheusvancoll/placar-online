import './App.css';
import { BrowserRouter } from 'react-router-dom'

import RouterPages from './pages/Router'

function App() {
  return (
    <BrowserRouter>
        <RouterPages className="App"/>
    </BrowserRouter>
  );
}

export default App;
