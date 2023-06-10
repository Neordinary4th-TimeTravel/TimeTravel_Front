import {Button, Image, Input} from '@rneui/base';
import React from 'react';
import {styled} from 'styled-components/native';

export default function () {
  return (
    <StyledSafeAreaView>
      <StyledView>
        <StyledImage
          source={require('assets/images/logo.png')}
          resizeMode="contain"
          // PlaceholderContent={<ActivityIndicator />}
        />
        <Spacing />
        {/* <InputContainer> */}
        <StyledInput placeholder="이메일 주소" style={{borderRadius: 24}} />
        {/* </InputContainer> */}
        <StyledInput placeholder="비밀번호" />
        <Button title="로그인" />
        <Button title="회원가입" />
      </StyledView>
    </StyledSafeAreaView>
  );
}

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const StyledImage = styled(Image)`
  width: 100;
  height: 100;
`;

const Spacing = styled.View`
  height: 40;
`;

// const InputContainer = styled.View`
//   /* border-radius: 24; */
//   overflow: hidden;
// `;

const StyledInput = styled(Input)`
  background-color: white;
  border-color: #848484;
  border: none;
  border-top-width: 1;
  border-left-width: 1;
  border-left-width: 1;
  border-right-width: 1;
  border-bottom: 1;
`;
