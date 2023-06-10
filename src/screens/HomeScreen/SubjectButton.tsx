import React from 'react';
import {styled} from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface SubjectButtonProps {
  key: number;
  iconName: string;
  subjectName: string;
}

function SubjectButton({key, iconName, subjectName}: SubjectButtonProps) {
  return (
    <StyledView key={key}>
      <Icon name={iconName} color="black" size={24} />
      <SubjectName>{subjectName}</SubjectName>
    </StyledView>
  );
}

export default SubjectButton;

const StyledView = styled.View`
  width: 57;
  height: 57;
  background-color: #ececec;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  margin-right: 13;
`;

const Icon = styled(MaterialIcons)`
  width: 22;
  height: 22;
`;

const SubjectName = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 16;
  line-height: 17;
  text-align: center;
  color: #000000;
  margin-top: 5;
`;
