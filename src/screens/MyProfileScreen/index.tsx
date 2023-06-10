import {Button} from '@rneui/base';
import React from 'react';
import {MainTabNavigationProp} from 'screens/types';
import {styled} from 'styled-components/native';

type MyProfileScreenProps = {
  navigation: MainTabNavigationProp;
};

export default function ({navigation}: MyProfileScreenProps) {
  return (
    <StyledView>
      <Button
        onPress={() => {
          navigation.navigate('Login');
        }}>
        로그인
      </Button>
      <Button
        onPress={() => {
          navigation.navigate('Register');
        }}>
        회원가입
      </Button>
    </StyledView>
  );
}

const StyledView = styled.View`
  flex: 1;
`;
