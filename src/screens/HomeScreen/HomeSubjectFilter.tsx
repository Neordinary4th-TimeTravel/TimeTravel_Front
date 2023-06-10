import React from 'react';
import {styled} from 'styled-components/native';
import SubjectButton from './SubjectButton';

type SubjectButtonProps = {
  iconName: string;
  subjectName: string;
};

type HomeSubjectFilterProps = {
  subjects: SubjectButtonProps[];
};

function HomeSubjectFilter({subjects}: HomeSubjectFilterProps) {
  return (
    <StyledScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
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
  margin-top: 14;
  flex: 1;
`;
