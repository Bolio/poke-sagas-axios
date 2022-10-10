import Main from "./components/Main";
import Button from "./components/Button";
import { randomPokemon, newPokemon } from "./utils";
import "./App.css";

function App() {
  const idPokemon = randomPokemon();

  return (
    <div className="App">
      <Main idPokemon={idPokemon} />
      <Button newPokemon={newPokemon}>Click to get a new Pokemon</Button>
    </div>
  );
}

export default App;
