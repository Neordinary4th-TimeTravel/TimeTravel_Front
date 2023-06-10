import {Button, Input} from '@rneui/base';
import React from 'react';
import {View} from 'react-native';

export default function NicknameScreen() {
  return (
    <View>
      <Input placeholder="닉네임" />
      {/* TODO: 성별 */}
      {/* TODO: 나이 */}
      <Button title="확인" />
    </View>
  );
}
