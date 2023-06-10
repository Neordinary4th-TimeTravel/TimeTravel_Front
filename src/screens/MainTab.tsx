import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainTabParamList} from './types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './HomeScreen';
import BoardListScreen from './BoardListScreen';
import CreateBoardScreen from './CreateBoardScreen';
import AlarmScreen from './AlarmScreen';
import MyProfileScreen from './MyProfileScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '홈',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="article" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="BoardList"
        component={BoardListScreen}
        options={{
          title: '캡슐 목록',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="CreateBoard"
        component={CreateBoardScreen}
        options={{
          title: '+',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Alarm"
        component={AlarmScreen}
        options={{
          title: '알림',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={MyProfileScreen}
        options={{
          title: '내 프로필',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
