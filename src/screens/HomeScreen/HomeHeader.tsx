import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styled} from 'styled-components/native';
import {BottomSheet, ListItem} from '@rneui/base';
import {useBoardStore} from 'stores/BoardStore';

interface HomeHeaderProps {
  userName: string;
  list: Array<string>;
}

function HomeHeader({userName, list}: HomeHeaderProps) {
  const {searchBoard, updateSearchBoard} = useBoardStore();

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const itemList = list.map(item => {
    return {
      title: item + '년대',
      onPress: () => {
        updateSearchBoard({year: item});
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
          <Icon name="search" color="white" size={20} />
          <Icon name="menu" color="white" size={24} />
        </IconView>
      </StyledView>
      <YearView onPress={() => setIsVisible(true)}>
        <YeaeTitleView>
          <YearTitleBold>{`${searchBoard.year}년대`}</YearTitleBold>
          <YearTitle>그때로</YearTitle>
        </YeaeTitleView>
        <MaterialIcons name="arrow-drop-down" color="black" size={24} />
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
  background-color: #282828;
  border-radius: 0px 0px 20px 20px;
  position: relative;
  padding-top: 31;
`;

const TextView = styled.View`
  flex-direction: column;
  padding-left: 24;
`;

const TitleText = styled.Text`
  color: #ffffff;
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
  background-color: #ffd494;
  border-radius: 30px;
  justify-content: space-between;
  padding-right: 10;
`;

const YeaeTitleView = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

const YearTitleBold = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 18;
  line-height: 22;
  color: #000000;
  padding-left: 22;
`;

const YearTitle = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 16;
  line-height: 19;
  color: #2f2f2f;
  margin-left: 4;
`;
