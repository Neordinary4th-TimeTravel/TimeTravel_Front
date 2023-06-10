import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableNativeFeedback} from 'react-native';
import {View} from 'react-native';
import {RootStackNavigationProp} from 'screens/types';

interface BoardListProps {
  subject: string;
  title: string;
  description: string;
}

export default function BoardList({
  subject,
  title,
  description,
}: BoardListProps) {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <TouchableNativeFeedback
      style={styles.back}
      onPress={() => {
        navigation.navigate('BoardDetail', {id: 1});
      }}>
      <View style={styles.back}>
        <Text style={styles.subTitle}>{subject}</Text>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.subTitle} numberOfLines={1}>
          {description}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 10,
    gap: 4,
    paddingBottom: 16,
    overflow: 'hidden',
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 2,
  },
  subTitle: {
    color: '#717171',
  },
});
