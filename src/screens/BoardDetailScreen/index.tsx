import React, {useState} from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CommentItem from './CommentItem';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function () {
  const {bottom} = useSafeAreaInsets();

  const [userComment, setUserComment] = useState<string>('');

  const onPress = () => {
    Alert.alert('좋아요 클릭');
  };

  return (
    <View style={styles.full}>
      <View style={styles.body}>
        <Text style={styles.nickname}>tissue</Text>
        <Text style={styles.date}>05/08 23:15</Text>
        <Text style={styles.title}>빅뱅, 미니 앨범 "뱅뱅뱅" 발매</Text>
        <Text style={styles.description}>
          음악 차트에서 1위를 차지하였으며, 빅뱅의 상징적인 노래입니다.
        </Text>
        <View style={styles.spacing} />
        <View style={styles.spacing} />

        <View style={styles.row}>
          <MaterialIcons name="favorite-outline" color="#FC6E62" size={12} />
          <Text style={styles.iconText}>0</Text>
          <MaterialIcons name="chat-bubble-outline" color="white" size={12} />
          <Text style={styles.iconText}>0</Text>
          <MaterialIcons name="bookmark-outline" color="#FFD494" size={12} />
          <Text style={styles.iconText}>0</Text>
        </View>

        <View style={styles.spacing} />

        <View style={styles.row}>
          <View style={styles.row}>
            <TouchableNativeFeedback
              style={styles.btnContainer}
              onPress={onPress}>
              <View style={styles.btnRow}>
                <MaterialIcons
                  name="favorite-outline"
                  color="#FC6E62"
                  size={12}
                />
                <Text style={styles.btnText}>Like</Text>
              </View>
            </TouchableNativeFeedback>
          </View>

          <View style={styles.row}>
            <TouchableNativeFeedback
              style={styles.btnContainer}
              onPress={onPress}>
              <View style={styles.btnRow}>
                <MaterialIcons
                  name="bookmark-outline"
                  color="#FFD494"
                  size={12}
                />
                <Text style={styles.btnText}>스크랩</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>

      <ScrollView style={styles.commentsContainer}>
        <CommentItem
          nickname="motebook"
          contents="중독성있는 어쩌고"
          date="06/08 23:15"
        />
        <CommentItem
          nickname="motebook"
          contents="중독성있는 어쩌고"
          date="06/08 23:15"
        />
      </ScrollView>
      <View style={[styles.rows, {marginBottom: bottom}]}>
        <TextInput
          placeholder="댓글을 입력하세요"
          style={styles.inputComment}
          value={userComment}
          onChangeText={setUserComment}
        />
        <MaterialIcons
          name="send"
          color="black"
          style={{paddingRight: 20}}
          size={20}
          onPress={() => {
            if (userComment.length > 0) {
              Alert.alert(userComment);
              setUserComment('');
              // TODO: 댓글작성
            }
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
  body: {
    backgroundColor: '#282828',
    paddingHorizontal: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    gap: 4,
    paddingTop: 10,
    paddingBottom: 20,
  },
  nickname: {
    color: '#AFAFAF',
    fontWeight: 'bold',
  },
  date: {
    color: '#AFAFAF',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white',
    paddingTop: 6,
  },
  description: {
    color: '#e4e4e4',
  },
  spacing: {
    height: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  iconText: {
    color: '#8F8F8F',
    fontSize: 12,
  },
  commentsContainer: {
    paddingHorizontal: 30,
  },
  inputComment: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    paddingVertical: 10,
    flex: 1,
  },
  rows: {
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 24,
    borderRadius: 10,
    overflow: 'hidden',
  },
  btnContainer: {
    borderRadius: 10,
    backgroundColor: 'yellow',
    padding: 4,
    overflow: 'hidden',
  },
  btnText: {
    color: 'white',
    fontSize: 10,
  },
  btnRow: {
    flexDirection: 'row',
    gap: 4,
    backgroundColor: '#555555',
    alignItems: 'center',
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 4,
  },
});
