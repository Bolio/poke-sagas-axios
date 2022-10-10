const initialState = {
  infoPokemon: {},

  fetching: false,
  success: false,
  error: false,
  errorMessage: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "POKES_FETCH_SUCCEEDED":
      return { ...state, infoPokemon: action.dataPokemon };
    default:
      return state;
  }
};
