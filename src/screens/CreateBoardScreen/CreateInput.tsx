import React from 'react';
import {Input} from '@rneui/base';

interface CreateInputProps {
  title: string;
}

function CreateInput({title}: CreateInputProps) {
  return (
    <>
      <Input placeholder={title} />
    </>
  );
}

export default CreateInput;

// const styles = StyleSheet.create({});
