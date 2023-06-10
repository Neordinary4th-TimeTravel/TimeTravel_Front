import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import MainTab from './MainTab';
// import useAuthLoadEffect from 'hooks/useAuthLoadEffect';
import ArticlesScreen from './ArticlesScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  //   useAuthLoadEffect();

  return (
    <Stack.Navigator screenOptions={{headerBackTitle: '닫기'}}>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Article"
        options={{title: '게시글'}}
        component={ArticlesScreen}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
