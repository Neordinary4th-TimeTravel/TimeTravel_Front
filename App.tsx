/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import BoardScreen from 'screens/BoardScreen';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <BoardScreen />
    </SafeAreaView>
  );
}

export default App;
