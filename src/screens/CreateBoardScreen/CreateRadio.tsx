/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {Button} from 'react-native';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import {useCapsuleBuilderStore} from 'stores/CapsuleBuilderStore';

interface CreateRadioProps {
  list: Array<string>;
}

function CreateRadio({list}: CreateRadioProps) {
  const [selectedIndex, setIndex] = useState<number>(0);
  const {updateCapsule} = useCapsuleBuilderStore();

  const onPress = (index: number) => {
    setIndex(index);
    updateCapsule({
      isPrivate: !!index,
    });
  };

  return (
    <View style={styles.row}>
      {list.map((item, index) => (
        <View
          key={index}
          style={[styles.full, index == selectedIndex && styles.selected]}>
          <Button title={item} onPress={() => onPress(index)} />
        </View>
      ))}
    </View>
  );
}

export default CreateRadio;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    flex: 1,
  },
  full: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
  selected: {
    backgroundColor: '#9e9e9e',
  },
});
