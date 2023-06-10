/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainTabNavigationProp, MainTabParamList} from './types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from './HomeScreen';
import BoardListScreen from './BoardListScreen';
import CreateBoardScreen from './CreateBoardScreen';
import AlarmScreen from './AlarmScreen';
import MyProfileScreen from './MyProfileScreen';
import {useNavigation} from '@react-navigation/native';
import {useCapsuleBuilderStore} from 'stores/CapsuleBuilderStore';
import {useBoardStore} from 'stores/BoardStore';

const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTab() {
  const navigation = useNavigation<MainTabNavigationProp>();
  const {clear} = useCapsuleBuilderStore();

  const {searchBoard} = useBoardStore();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#282828'},
        tabBarActiveTintColor: '#FF8C83',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '홈',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="CapsuleList"
        component={AlarmScreen}
        options={{
          title: `${searchBoard.year}년대 ${searchBoard.subject}게시판`,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="link" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="CreateBoard"
        component={CreateBoardScreen}
        options={{
          title: '캡슐 만들기',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="add" color={color} size={size} />
          ),
          tabBarStyle: {
            display: 'none',
          },
          headerLeft: () => (
            <MaterialIcons
              name="arrow-back-ios"
              color="white"
              style={{paddingLeft: 20}}
              size={20}
              onPress={() => {
                navigation.navigate('Home');
                clear();
              }}
            />
          ),
          headerStyle: {
            backgroundColor: '#282828',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          },
          headerTintColor: 'white', // Set the text color of the header to white
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen
        name="Alarm"
        component={AlarmScreen}
        options={{
          title: '알림',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="notifications" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={MyProfileScreen}
        options={{
          title: '내 프로필',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="account-circle" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
