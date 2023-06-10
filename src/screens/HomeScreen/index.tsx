import React from 'react';

import {styled} from 'styled-components/native';
import HomeHeader from './HomeHeader';

export default function () {
  return (
    <StyledView>
      <HomeHeader
        userName="soft"
        defaultYear="2010"
        list={['1980', '1990', '2000']}
      />
    </StyledView>
  );
}

const StyledView = styled.View`
  flex: 1;
`;
