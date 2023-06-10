import React, {useState} from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useCapsuleBuilderStore} from 'stores/CapsuleBuilderStore';

interface CreateDatePickerProps {
  title: string;
}

function CreateDatePicker({title}: CreateDatePickerProps) {
  const [isDatePickerVisible, setDatePickerVisibility] =
    useState<boolean>(false);

  const {capsule, updateCapsule} = useCapsuleBuilderStore();
  const {openTime} = capsule;

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate: Date) => {
    hideDatePicker();
    updateCapsule({
      openTime: selectedDate,
    });
  };

  const minimumDate = new Date();

  return (
    <View>
      <TouchableNativeFeedback onPress={showDatePicker} style={styles.time}>
        <View style={styles.row}>
          <Text style={[styles.time, openTime && styles.b]}>
            {openTime
              ? openTime
                  .toLocaleDateString('ko-GB', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  })
                  .replace(/\//g, '.')
              : title}
          </Text>
          <MaterialIcons
            name="arrow-drop-down"
            color="black"
            size={25}
            style={{paddingRight: 10}}
          />
        </View>
      </TouchableNativeFeedback>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        date={openTime || new Date()}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        minimumDate={minimumDate}
      />
    </View>
  );
}

export default CreateDatePicker;

const styles = StyleSheet.create({
  time: {
    backgroundColor: 'white',
    full: 1,
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
    color: '#7d7d7d',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
  b: {
    color: 'black',
  },
});
