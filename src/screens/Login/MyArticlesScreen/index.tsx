import React from 'react';
import {Text} from 'react-native';
import {styled} from 'styled-components/native';

export default function () {
  return (
    <StyledView>
      <Text>MyArticle</Text>
    </StyledView>
  );
}

const StyledView = styled.View`
  flex: 1;
`;
