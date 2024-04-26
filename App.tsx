/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import StackNavigator from './app/navigation/StackNavigator';
import Toast from 'react-native-toast-message';

function App(): React.JSX.Element {
  return (
    <>
      <StackNavigator />
      <Toast />
    </>
  );
}

export default App;
