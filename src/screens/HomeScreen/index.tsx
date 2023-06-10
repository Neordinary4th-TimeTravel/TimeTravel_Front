import React from 'react';
import {styled} from 'styled-components/native';
import HomeDate from './HomeDate';
import HomeHeader from './HomeHeader';
import HomeSubjectFilter from './HomeSubjectFilter';

export default function () {
  return (
    <StyledView>
      <HomeHeader
        userName="soft"
        defaultYear="2010"
        list={['1980', '1990', '2000', '2010', '2020']}
      />
      <HomeSubjectFilter
        subjects={[
          {iconName: 'headphones', subjectName: '음악'},
          {iconName: 'styler', subjectName: '패션'},
          {iconName: 'movie_info', subjectName: '영화'},
          {iconName: 'send', subjectName: '드라마'},
          {iconName: 'send', subjectName: '만화'},
          {iconName: 'send', subjectName: '예능'},
        ]}
      />
      <HomeDate lockDate="2023-05-27" createDate="2023-05-12" />
    </StyledView>
  );
}

const StyledView = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;
