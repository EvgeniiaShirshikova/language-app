import './App.css';
import Game from './components/Game';
import Table from './components/Table';
import Home from './components/Home';

function App() {
  return (
    <div className="container">
      <Home/>
      <Game/>
      <Table/>
    </div>
  );
}

export default App;
