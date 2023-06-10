import React from 'react';
import {Text} from 'react-native';
import {StyleSheet, View} from 'react-native';

interface CommentItemProps {
  nickname: string;
  contents: string;
  date: string;
}

export default function CommentItem({
  nickname,
  contents,
  date,
}: CommentItemProps) {
  return (
    <View style={styles.back}>
      <Text style={styles.nickname}>{nickname}</Text>
      <Text style={styles.contents}>{contents}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    flex: 1,
    paddingVertical: 14,
    borderBottomColor: '#d8d8d8',
    borderBottomWidth: 1,
  },
  nickname: {
    fontWeight: 'bold',
    marginBottom: 4,
    fontSize: 14,
  },
  contents: {
    color: '#717171',
    marginBottom: 2,
    fontSize: 12,
  },
  date: {
    color: '#717171',
    fontSize: 10,
  },
});
