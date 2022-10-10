import axios from "axios";
import { put, call, takeEvery } from "redux-saga/effects";

function* fetchPokes(action) {
  try {
    const urlAPI = `https://pokeapi.co/api/v2/pokemon/${action.payload.idPok}`;
    const response = yield call(axios.get, urlAPI);
    yield put({ type: "POKES_FETCH_SUCCEEDED", dataPokemon: response?.data });
  } catch (error) {
    console.error("ERROR DE AXIOS", error);
  }
}

function* saga() {
  yield takeEvery("POKES_FETCH_REQUESTED", fetchPokes);
}

export default saga;
