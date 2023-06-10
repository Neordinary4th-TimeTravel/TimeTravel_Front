import React from 'react';
import {styled} from 'styled-components/native';
import SubjectButton from './SubjectButton';

interface SubjectButtonProps {
  iconName: string;
  subjectName: string;
}

interface HomeSubjectFilterProps {
  subjects: SubjectButtonProps[];
}

function HomeSubjectFilter({subjects}: HomeSubjectFilterProps) {
  return (
    <StyledScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {subjects.map((item, index) => (
        <SubjectButton
          key={index}
          iconName={item.iconName}
          subjectName={item.subjectName}
        />
      ))}
    </StyledScrollView>
  );
}

export default HomeSubjectFilter;

const StyledScrollView = styled.ScrollView`
  padding-left: 24;
  margin-top: 45;
  flex: 1;
`;
