import {useNavigation} from '@react-navigation/native';
import {Button, Text} from '@rneui/base';
import React from 'react';
import {RootStackNavigationProp} from 'screens/types';
import {styled} from 'styled-components/native';

export default function () {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <StyledView>
      <Text>환영해요!</Text>
      <Text>
        soft님, 회원가입을 축하드려요. 그리웠던 그 때로 추억여행 떠날 준비
        되셨나요?
      </Text>
      <Button
        title="시작하기"
        onPress={() => {
          navigation.navigate('MainTab');
        }}
      />
    </StyledView>
  );
}

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
