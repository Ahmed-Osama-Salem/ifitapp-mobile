/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import Toast from 'react-native-toast-message';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import StackNavigator from 'navigation/StackNavigator';
import {persistor, store} from 'Redux/Store';
import {I18nextProvider} from 'react-i18next';
import i18n from 'i18n/i18n';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18n}>
          <GestureHandlerRootView>
            <StackNavigator />
            <Toast />
          </GestureHandlerRootView>
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
