import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import newsReducer from './auth/reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  news: persistReducer(persistConfig, newsReducer),
});

export default rootReducer;
