import React, {useState} from 'react';
import {Button} from '@rneui/base';
import {Stack} from '@rneui/layout';
import {Text} from 'react-native';

interface CreateRadioProps {
  list: Array<string>;
}

function CreateRadio({list}: CreateRadioProps) {
  const [selectedIndex, setIndex] = useState<number>(0);

  return (
    <>
      <Stack row align="center" spacing={4}>
        {list.map((item, index) => (
          <Button key={index} title={item} onPress={() => setIndex(index)} />
        ))}
      </Stack>
      <Text>{selectedIndex}</Text>
    </>
  );
}

export default CreateRadio;

// const styles = StyleSheet.create({});
