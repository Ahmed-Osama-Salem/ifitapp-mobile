/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import StackNavigator from 'navigation/StackNavigator';
import {persistor, store} from 'Redux/Store';
import {I18nextProvider} from 'react-i18next';
import i18n from 'i18n/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToastProvider} from 'Common/DynamicComponents/Toaster/ToasterProvider';

function App(): React.JSX.Element {
  useEffect(() => {
    const loadLanguage = async () => {
      try {
        const storedLanguage = await AsyncStorage.getItem('selectedLang');

        if (storedLanguage) {
          // i18next.changeLanguage(storedLanguage);
          await i18n.changeLanguage(storedLanguage);
        }
      } catch (e) {
        console.log(e);
      }
    };
    loadLanguage();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18n}>
          <ToastProvider>
            <GestureHandlerRootView>
              <StackNavigator />
            </GestureHandlerRootView>
          </ToastProvider>
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
