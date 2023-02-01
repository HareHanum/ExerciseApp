import {configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './auth/rootSaga';
import rootReducer from './rootReducer';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Mount it on the Store
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(sagaMiddleware);
  },
});

// Run the saga
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
