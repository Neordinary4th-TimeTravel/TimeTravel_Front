import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import MainTab from './MainTab';
import RegisterScreen from 'screens/Login/RegisterScreen';
import LoginScreen from 'screens/Login/LoginScreen';
import BoardDetail from './BoardDetailScreen';
import useAuthLoadEffect from 'hooks/useAuthLoadEffect';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  useAuthLoadEffect();

  return (
    <Stack.Navigator screenOptions={{headerBackTitle: '닫기'}}>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BoardDetail"
        options={{title: '게시글'}}
        component={BoardDetail}
      />
      <Stack.Screen
        name="Register"
        options={{title: '회원가입'}}
        component={RegisterScreen}
      />
      <Stack.Screen
        name="Login"
        options={{title: '로그인', headerShown: false}}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
