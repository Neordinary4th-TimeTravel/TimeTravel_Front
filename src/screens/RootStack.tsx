import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainTabNavigationProp, RootStackParamList} from './types';
import MainTab from './MainTab';
import RegisterScreen from 'screens/Login/RegisterScreen';
import LoginScreen from 'screens/Login/LoginScreen';
import BoardDetail from './BoardDetailScreen';
import useAuthLoadEffect from 'hooks/useAuthLoadEffect';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import BoardListScreen from './BoardListScreen';
import {useBoardStore} from 'stores/BoardStore';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  useAuthLoadEffect();
  const navigation = useNavigation<MainTabNavigationProp>();
  const {searchBoard} = useBoardStore();

  return (
    <Stack.Navigator screenOptions={{headerBackTitle: '닫기'}}>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BoardList"
        options={{
          title: `${searchBoard.year}년대 ${searchBoard.subject}게시판`,
          headerStyle: {
            backgroundColor: '#282828',
          },
          headerTitleStyle: {
            color: 'white',
          },
          headerLeft: () => (
            <MaterialIcons
              name="arrow-back-ios"
              color="white"
              style={{paddingLeft: 20}}
              size={20}
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
          ),
        }}
        component={BoardListScreen}
      />
      <Stack.Screen
        name="BoardDetail"
        options={{
          title: '게시글',
          headerStyle: {
            backgroundColor: '#282828',
          },
          headerTitleStyle: {
            color: 'white',
          },
          headerLeft: () => (
            <MaterialIcons
              name="arrow-back-ios"
              color="white"
              style={{paddingLeft: 20}}
              size={20}
              onPress={() => {
                navigation.navigate('BoardList');
              }}
            />
          ),
        }}
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
