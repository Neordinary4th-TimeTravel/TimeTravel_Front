import React, {useState} from 'react';
import {Button, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
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
      <Button
        title={
          openTime
            ? openTime
                .toLocaleDateString('ko-GB', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                })
                .replace(/\//g, '.')
            : title
        }
        onPress={showDatePicker}
      />
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
