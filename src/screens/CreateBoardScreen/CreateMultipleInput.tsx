import {Input} from '@rneui/base';
import React from 'react';
import {styled} from 'styled-components/native';

interface CreateMultipleInputProps {
  title: string;
}

const StyledInput = styled(Input)`
  height: 100;
`;

function CreateMultipleInput({title}: CreateMultipleInputProps) {
  return (
    <>
      <StyledInput placeholder={title} multiline={true} />
    </>
  );
}

export default CreateMultipleInput;
