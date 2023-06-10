import React, {useState} from 'react';
import {BottomSheet, Button, ListItem} from '@rneui/base';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Text} from 'react-native';

interface CreateSelectorProps {
  title: string;
  list: Array<string>;
}

function CreateSelector({title, list}: CreateSelectorProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [item, setItem] = useState('');

  const itemList = list.map(item => {
    if (!isNaN(parseInt(item))) {
      return {
        title: item + '년대',
        onPress: () => {
          setItem(item);
          setIsVisible(false);
        },
      };
    } else {
      return {
        title: item,
        onPress: () => {
          setItem(item);
          setIsVisible(false);
        },
      };
    }
  });

  return (
    <SafeAreaProvider>
      <Button title={title} onPress={() => setIsVisible(true)} />
      <BottomSheet modalProps={{}} isVisible={isVisible}>
        {itemList.map((item, index) => (
          <ListItem key={index} onPress={item.onPress}>
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
      <Text>{item}</Text>
    </SafeAreaProvider>
  );
}

export default CreateSelector;

// const styles = StyleSheet.create({});
