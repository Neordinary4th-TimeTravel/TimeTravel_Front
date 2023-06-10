import React from 'react';
import {styled} from 'styled-components/native';
import CreateBoardScreen from './CreateBoardScreen';

export default function ArticlesScreen() {
  return (
    <StyledView>
      <CreateBoardScreen />
    </StyledView>
  );
}

const StyledView = styled.View`
  flex: 1;
`;
