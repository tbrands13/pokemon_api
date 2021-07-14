import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import './components/Pokedex';


function App() {
const [pokedex, setPokedex] = useState([]);


  const usePokedex = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(res => res.json())
    .then(res => {
      console.log(res);
      setPokedex(res.results)
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <h1>Pokemon API</h1>
      <input type="submit" onClick={usePokedex} className="btn btn-warning" value="Use Pokedex"/>
      <ul>
        {
          pokedex.map((item, idx) => {
            return <li key={idx}>{item.name}</li>
          } )
        }
      </ul>
    </div>
  );
};

export default App;
