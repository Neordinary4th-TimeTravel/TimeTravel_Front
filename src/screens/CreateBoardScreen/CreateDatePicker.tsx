import React, {useState} from 'react';
import {Button, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

interface CreateDatePickerProps {
  title: string;
}

function CreateDatePicker({title}: CreateDatePickerProps) {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [isDatePickerVisible, setDatePickerVisibility] =
    useState<boolean>(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate: Date) => {
    setDate(selectedDate);
    hideDatePicker();
  };

  const minimumDate = new Date();

  return (
    <View>
      <Button title={date ? date.toString() : title} onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        date={date || new Date()}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        minimumDate={minimumDate}
      />
    </View>
  );
}

export default CreateDatePicker;
