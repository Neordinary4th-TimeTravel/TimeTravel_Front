import React, {useState} from 'react';
import {BottomSheet, Button, ListItem} from '@rneui/base';
import {useCapsuleBuilderStore} from 'stores/CapsuleBuilderStore';

interface CreateSelectorProps {
  title: string;
  list: Array<string>;
  type: 'YEAR' | 'SUBJECT';
}

function CreateSelector({title, list, type}: CreateSelectorProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const {capsule, updateCapsule} = useCapsuleBuilderStore();
  const {year, subject} = capsule;

  const itemList = list.map(item => {
    if (type === 'YEAR') {
      // 년도
      return {
        title: item + '년대',
        onPress: () => {
          setIsVisible(false);
          updateCapsule({year: item});
        },
      };
    } else {
      // 주제
      return {
        title: item,
        onPress: () => {
          setIsVisible(false);
          updateCapsule({subject: item});
        },
      };
    }
  });

  return (
    <>
      <Button
        title={type === 'YEAR' ? year || title : subject || title}
        onPress={() => setIsVisible(true)}
        buttonStyle={{
          backgroundColor: '#EFEFEF',
          borderRadius: 7,
          marginBottom: 10,
        }}
        titleStyle={{
          color: year || subject ? 'black' : '#7D7D7D',
          fontSize: 12,
          textAlign: 'left',
        }}
      />
      <BottomSheet modalProps={{}} isVisible={isVisible}>
        {itemList.map((item, index) => (
          <ListItem
            key={index}
            onPress={item.onPress}
            containerStyle={
              index === 0
                ? {borderTopLeftRadius: 24, borderTopRightRadius: 24}
                : index === itemList.length - 1
                ? {paddingBottom: 30}
                : {}
            }>
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </>
  );
}

export default CreateSelector;
