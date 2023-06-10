import {Button, Input} from '@rneui/base';
import {Stack} from '@rneui/layout';
import React from 'react';
import {View} from 'react-native';

interface EmailScreenProps {
  onNext: () => void;
}

export default function EmailScreen({onNext}: EmailScreenProps) {
  return (
    <View>
      <Stack row align="center">
        <Input placeholder="이메일" />
        <Button title="중복 확인" />
      </Stack>
      <Input placeholder="비밀번호" />
      <Input placeholder="비밀번호 확인" />
      <Button title="가입하기" onPress={onNext} />
    </View>
  );
}
