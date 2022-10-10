const randomPokemon = () => Math.floor(Math.random() * 150) + 1;

const newPokemon = (dispatch) => {
  const idPokemon = randomPokemon();
  dispatch({ type: "POKES_FETCH_REQUESTED", payload: { idPok: idPokemon } });
};

export { randomPokemon, newPokemon };
