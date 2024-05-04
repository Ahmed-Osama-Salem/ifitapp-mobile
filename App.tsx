/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import StackNavigator from './app/navigation/StackNavigator';
import Toast from 'react-native-toast-message';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <StackNavigator />
      <Toast />
    </GestureHandlerRootView>
  );
}

export default App;
