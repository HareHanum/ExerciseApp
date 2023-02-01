import axios from 'axios';
import {all, call, put, takeEvery} from 'redux-saga/effects';

import {newsFetchedFailed, newsFetchedSuccess} from './actions';
import {FETCH_NEWS_REQUEST} from './actionTypes';

const news = async () => {
  const {data} = await axios.get(
    'https://run.mocky.io/v3/a760bf42-d160-4ab4-b439-e64c6e5482aa',
  );

  return data;
};

function* fetchNewsSaga() {
  try {
    const response: {data: string[]} = yield call(news);
    yield put(newsFetchedSuccess({data: response.data}));
  } catch (e: any) {
    console.log(`fetchNewsSaga failed - ${e}`);

    yield put(
      newsFetchedFailed({
        error: e.message,
      }),
    );
  }
}

function* authSaga() {
  yield all([takeEvery(FETCH_NEWS_REQUEST, fetchNewsSaga)]);
}

export default authSaga;
