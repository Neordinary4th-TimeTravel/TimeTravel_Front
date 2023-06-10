import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import BoardList from './BoardList';

export default function () {
  return (
    <ScrollView style={styles.back}>
      <BoardList
        subject="음악"
        title="K-팝"
        description="중독성ㅇㄹㅁㅈ러ㅐㄷ쟈ㅓㄹ;ㅐㅁㅈ댜ㅓㄹ;ㅐㅁㅈ댜ㅓㄹㅊ;ㅐㄷ쟈ㅓㄹ;ㅐㄷ쟈ㅓㄹ;ㅐ쟈ㅓㄹ잼"
      />
      <BoardList
        subject="음악"
        title="K-팝"
        description="중독성ㅇㄹㅁㅈ러ㅐㄷ쟈ㅓㄹ;ㅐㅁㅈ댜ㅓㄹ;ㅐㅁㅈ댜ㅓㄹㅊ;ㅐㄷ쟈ㅓㄹ;ㅐㄷ쟈ㅓㄹ;ㅐ쟈ㅓㄹ잼"
      />
      <BoardList
        subject="음악"
        title="K-팝"
        description="중독성ㅇㄹㅁㅈ러ㅐㄷ쟈ㅓㄹ;ㅐㅁㅈ댜ㅓㄹ;ㅐㅁㅈ댜ㅓㄹㅊ;ㅐㄷ쟈ㅓㄹ;ㅐㄷ쟈ㅓㄹ;ㅐ쟈ㅓㄹ잼"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  back: {
    padding: 16,
    gap: 10,
  },
});
