import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styled} from 'styled-components/native';
import {BottomSheet, Button, ListItem} from '@rneui/base';

interface HomeHeaderProps {
  userName: string;
  defaultYear: string;
  list: Array<string>;
}

function HomeHeader({userName, defaultYear, list}: HomeHeaderProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [item, setItem] = useState('');

  const itemList = list.map(item => {
    return {
      title: item + '년대',
      onPress: () => {
        setItem(item);
        setIsVisible(false);
      },
    };
  });

  return (
    <ContainerView>
      <StyledView>
        <TextView>
          <TitleText>안녕하세요 {userName}님,</TitleText>
          <TitleText>
            <TextBold>추억여행</TextBold> 떠날 준비 되셨나요?
          </TitleText>
        </TextView>
        <IconView>
          <Icon name="search" color="black" size={20} />
          <Icon name="menu" color="black" size={24} />
        </IconView>
      </StyledView>
      <YearView onPress={() => setIsVisible(true)}>
        <Button
          title={
            item
              ? `${item}년대 그때로 돌아가기`
              : `${defaultYear}년대 그때로 돌아가기`
          }
          buttonStyle={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            backgroundColor: 'transparent',
          }}
          titleStyle={{
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: 16,
            color: '#4A4A4A',
            lineHeight: 19,
            textAlign: 'left',
          }}
        />
        <MaterialIcons name="arrow-drop-down" color="black" size={24} />
        <BottomSheet modalProps={{}} isVisible={isVisible}>
          {itemList.map((item, index) => (
            <ListItem key={index} onPress={item.onPress}>
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </BottomSheet>
      </YearView>
    </ContainerView>
  );
}

export default HomeHeader;

const ContainerView = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const StyledView = styled.View`
  width: 100%;
  height: 125;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #e7e7e7;
  border-radius: 0px 0px 30px 30px;
  position: relative;
  padding-top: 31;
`;

const TextView = styled.View`
  flex-direction: column;
  padding-left: 24;
`;

const TitleText = styled.Text`
  color: '#000000';
  font-weight: 300;
  font-size: 22;
  line-height: 27;
  font-style: normal;
`;

const TextBold = styled(TitleText)`
  font-weight: 700;
`;

const IconView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 18;
`;

const Icon = styled(MaterialIcons)`
  margin-right: 6;
`;

const YearView = styled.TouchableOpacity`
  position: absolute;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 98;
  width: 87%;
  height: 53;
  background-color: #ffffff;
  border-radius: 30px;
  justify-content: space-between;
  padding-right: 10;
`;
