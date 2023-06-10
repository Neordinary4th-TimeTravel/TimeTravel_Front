/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {
  Button,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
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
        <TouchableWithoutFeedback
          style={styles.full}
          onPress={() => onPress(index)}>
          <View
            key={index}
            style={[styles.full, index === selectedIndex && styles.selected]}>
            <Text style={{fontSize: 14}}>{item}</Text>
          </View>
        </TouchableWithoutFeedback>
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
    backgroundColor: 'white',
    borderRadius: 7,
    color: 'white',
    paddingVertical: 10,
    alignItems: 'center',
  },
  selected: {
    backgroundColor: '#FFD494',
  },
});
