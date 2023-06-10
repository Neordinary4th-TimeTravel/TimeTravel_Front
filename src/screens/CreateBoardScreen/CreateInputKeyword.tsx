import React from 'react';
import {Input} from '@rneui/themed';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface CreateInputKeywordProps {
  title: string;
}

function CreateInputKeyword({title}: CreateInputKeywordProps) {
  return (
    <>
      <Input
        placeholder={title}
        rightIcon={<MaterialIcons name="send" color="black" size={24} />}
      />
    </>
  );
}

export default CreateInputKeyword;

// const styles = StyleSheet.create({});
