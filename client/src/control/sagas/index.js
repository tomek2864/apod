import { put, call, takeLatest } from "redux-saga/effects";
import * as actions from "../actions/types";
import { dataApod } from "../../utils";

export default function* root() {
  yield takeLatest(actions.GET_APOD_DATA, fetchApodData);
}

//Funkcji put() lub call() używa się zwracając wartość z generatora, na podstawie którego utworzony zostanie iterator (w middleware). Metody te zwracają odpowiedni typ obiektu, na którego podstawie middleware wie czy wywołać funkcję czy też rozgłosić akcję.
function* fetchApodData(action) {
  try {
    const { apodSearchData } = action.payload;
    //Put to funkcja podobna do call() tylko, że zamiast wywoływać pierwszy parametr jako funkcję, middleware rozgłasza przekazany parametr jako akcję. Dzięki temu zostanie ona standardowo obsłużona przez “reducer”.
    yield put({ type: actions.LOADING_APOD_DATA });
    //informujemy middleware ze ma za pomoca next() wywolac funkcje apodApiPromise z parametrami szukania
    const res = yield call(apodApiPromise, apodSearchData);
    //Jest to funkcja podobna do call() tylko, że zamiast wywoływać pierwszy parametr jako funkcję, middleware rozgłasza przekazany parametr jako akcję. Dzięki temu zostanie ona standardowo obsłużona przez “reducer”.
    yield put({
      type: actions.LOADED_APOD_DATA,
      payload: { ...res.data }
    });
  } catch (e) {
    yield put({ type: actions.ERROR_APOD });
  }
}

async function apodApiPromise(apodSearchData) {
  const promise = await new Promise((resolve, reject) => {
    dataApod(apodSearchData, (data, err) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });

  return promise;
}
