import React from 'react';
import {ScrollView} from 'react-native';
import {styled} from 'styled-components/native';
import CapsuleHeader from './CapsuleHeader';

export default function () {
  return (
    <StyledView>
      <ScrollView>
        <CapsuleHeader />
      </ScrollView>
    </StyledView>
  );
}

const StyledView = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;
