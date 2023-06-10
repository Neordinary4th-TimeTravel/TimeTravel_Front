/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import CreateSelector from './CreateSelector';
import CreateRadio from './CreateRadio';
import CreateDatePicker from './CreateDatePicker';
import {useCapsuleBuilderStore} from 'stores/CapsuleBuilderStore';
import {styled} from 'styled-components/native';
import Title from './Title';
import {
  StyleSheet,
  TextInput,
  View,
  Alert,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {MainTabNavigationProp} from 'screens/types';
import {useNavigation} from '@react-navigation/native';

export default function () {
  const {capsule, updateCapsule, clear} = useCapsuleBuilderStore();

  const navigation = useNavigation<MainTabNavigationProp>();

  const {
    year,
    subject,
    content,
    openTime,
    title,
    keywords,
    contentType,
    song,
    friends,
  } = capsule;

  // const [capsuleTitle, setCapsuleTitle] = useState<string | null>(null);
  const [contents, setContents] = useState<string | null>(null);

  const [isPossible, setIsPossible] = useState<boolean>(false);

  const onPressGpt = () => {
    Alert.alert('hello');
  };

  const onPressFinal = () => {
    if (isPossible) {
      Alert.alert('success');
      console.log(capsule);
      clear();
      navigation.navigate('Home');
    } else {
      Alert.alert('필수 정보를 다 입력해주세요!');
    }
  };

  useEffect(() => {
    setIsPossible(!!year && !!subject && !!title && !!content && !!openTime);
  }, [capsule]);

  return (
    <StyledSafeArea>
      <StyledView contentContainerStyle={styles.flexG}>
        <Title title="년도 선택 *" />
        <CreateSelector
          title="어떤 년도와 관련된 캡슐인가요?"
          list={['1980', '1990', '2000']}
          type="YEAR"
        />

        <Title title="주제 선택 *" />
        <CreateSelector
          title="어떤 내용으로 만드시나요?"
          list={['음악', '패션', '패션', '패션', '패션']}
          type="SUBJECT"
        />

        <Title title="글쓰기 *" />
        <TextInput
          placeholder="제목: "
          value={title ?? ''}
          onChangeText={v => {
            updateCapsule({
              title: v,
            });
          }}
          style={[styles.textInputStyle]}
        />

        <View style={styles.spacing} />

        <View style={styles.row}>
          <View style={styles.full}>
            <TextInput
              placeholder="키워드: ex) 짱구 극장판 3기"
              value={keywords ?? ''}
              onChangeText={v => {
                updateCapsule({
                  keywords: v,
                });
              }}
              style={styles.textInputStyle}
            />
            <TextInput
              placeholder="글 형식: ex) 블로그 형식"
              value={contentType ?? ''}
              onChangeText={v => {
                updateCapsule({
                  contentType: v,
                });
              }}
              style={styles.textInputStyle}
            />
          </View>
          <MaterialIcons
            name="send"
            color="black"
            size={24}
            onPress={onPressGpt}
          />
        </View>

        <View style={styles.spacing} />

        <TextInput
          placeholder="본문: "
          multiline
          numberOfLines={5}
          value={contents ?? ''}
          onChangeText={v => {
            setContents(v);
            updateCapsule({
              content: v,
            });
          }}
          style={[styles.textInputStyle, styles.multiple]}
        />

        <Title title="노래 추가" />
        <TextInput
          placeholder="캡슐과 어울리는 노래를 입력해주세요!"
          value={song ?? ''}
          onChangeText={v => {
            updateCapsule({
              song: v,
            });
          }}
          style={styles.textInputStyle}
        />

        <Title title="친구 태그하기" />
        <TextInput
          placeholder="요즘 듣고 있는 노래를 입력해주세요!"
          value={friends ?? ''}
          onChangeText={v => {
            updateCapsule({
              friends: v,
            });
          }}
          style={styles.textInputStyle}
        />

        <Title title="공개 여부 *" />
        <CreateRadio list={['공개', '비공개']} />

        <Title title="캡슐 해제 시간 *" />
        <CreateDatePicker title="해제 시간을 설정해주세요!" />

        <View style={styles.spacing} />
        <View style={styles.spacing} />
        <View style={styles.spacing} />
      </StyledView>
      <View style={styles.spacing} />

      <TouchableWithoutFeedback style={styles.full} onPress={onPressFinal}>
        <View style={styles.highLight}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>캡슐 만들기</Text>
        </View>
      </TouchableWithoutFeedback>
    </StyledSafeArea>
  );
}

const StyledSafeArea = styled.SafeAreaView`
  flex: 1;
`;

const StyledView = styled.ScrollView`
  flex: 1;
  background-color: '#f0f0f0';
  padding-top: 24;
  padding-left: 24;
  padding-right: 24;
  padding-bottom: 100;
`;

const styles = StyleSheet.create({
  flexG: {
    flexGrow: 1,
  },
  textInputStyle: {
    backgroundColor: 'white',
    borderRadius: 7,
    overflow: 'hidden',
    borderColor: 'transparent',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 8,
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  multiple: {
    height: 100,
    paddingTop: 10,
  },
  spacing: {
    height: 10,
  },
  full: {
    flex: 1,
  },
  highLight: {
    full: 1,
    justifyContent: 'center',
    backgroundColor: '#FF8C83',
    marginHorizontal: 30,
    borderRadius: 7,
    color: 'black',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.25)',
    paddingVertical: 12,
    alignItems: 'center',
  },
});
