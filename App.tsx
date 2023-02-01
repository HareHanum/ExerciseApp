import 'react-native-gesture-handler';
import * as React from 'react';

import Root from './src/Root';
import {Provider} from 'react-redux';
import store, {persistor} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Text} from 'react-native';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
      <Root />
    </PersistGate>
  </Provider>
);

export default App;
