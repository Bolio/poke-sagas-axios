import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Main = ({ idPokemon }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "POKES_FETCH_REQUESTED", payload: { idPok: idPokemon } });
  }, []);

  const infoPokemonCompleted = useSelector(
    (state) => state?.infoPokemon
  );

  const imagePokemon = infoPokemonCompleted?.sprites?.front_default;

  return (
    <>
      {infoPokemonCompleted && Object.keys(infoPokemonCompleted)?.length > 0 ? (
        <div>
          <h1>{infoPokemonCompleted?.name.toUpperCase()}</h1>
          <img src={imagePokemon} alt={infoPokemonCompleted?.name} />
        </div>
      ) : (
        <p>Searching Pokemon...</p>
      )}
    </>
  );
};

export default Main;
