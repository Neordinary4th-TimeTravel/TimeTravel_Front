import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {Text} from 'react-native';
import {MainTabNavigationProp} from 'screens/types';
import {styled} from 'styled-components/native';

export default function () {
  const navigation = useNavigation<MainTabNavigationProp>();

  return (
    <StyledView>
      <View style={styles.grow}>
        <Image
          source={require('assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.spacing} />

        <Text style={styles.title}>환영해요!</Text>

        <View style={styles.spacing} />

        <Text>soft님</Text>
        <Text>회원가입을 축하드려요.</Text>
        <View style={styles.spacing} />

        <Text>그리웠던 그 때로</Text>
        <Text>추억여행 떠날 준비 되셨나요?</Text>
      </View>

      <TouchableWithoutFeedback
        style={styles.full}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <View style={styles.highLight}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>시작하기</Text>
        </View>
      </TouchableWithoutFeedback>
    </StyledView>
  );
}

const StyledView = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  spacing: {
    height: 15,
  },
  grow: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  full: {
    flex: 1,
  },
  highLight: {
    width: '90%',
    justifyContent: 'center',
    backgroundColor: '#FF8C83',
    marginHorizontal: 30,
    borderRadius: 7,
    color: 'black',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.25)',
    paddingVertical: 12,
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
  },
});
