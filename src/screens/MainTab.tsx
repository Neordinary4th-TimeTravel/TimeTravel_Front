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
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useCapsuleBuilderStore} from 'stores/CapsuleBuilderStore';

const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTab() {
  const navigation = useNavigation<MainTabNavigationProp>();
  const {clear} = useCapsuleBuilderStore();

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
          title: '캡슐 만들기',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
          headerLeft: () => (
            <Button
              title="< back"
              onPress={() => {
                navigation.navigate('Home');
                clear();
              }}
            />
          ),
          tabBarStyle: {display: 'none'},
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
