import React from 'react';
import {styled} from 'styled-components/native';
import HomeHeader from './HomeHeader';
import HomeSubjectFilter from './HomeSubjectFilter';

export default function () {
  return (
    <StyledView>
      <HomeHeader
        userName="soft"
        defaultYear="2010"
        list={['1980', '1990', '2000']}
      />
      <HomeSubjectFilter
        subjects={[
          {iconName: 'send', subjectName: '패션'},
          {iconName: 'send', subjectName: '음악'},
          {iconName: 'send', subjectName: '패션'},
          {iconName: 'send', subjectName: '음악'},
          {iconName: 'send', subjectName: '패션'},
          {iconName: 'send', subjectName: '음악'},
          {iconName: 'send', subjectName: '패션'},
          {iconName: 'send', subjectName: '음악'},
          {iconName: 'send', subjectName: '패션'},
          {iconName: 'send', subjectName: '음악'},
          {iconName: 'send', subjectName: '패션'},
          {iconName: 'send', subjectName: '음악'},
        ]}
      />
    </StyledView>
  );
}

const StyledView = styled.View`
  flex: 1;
`;
