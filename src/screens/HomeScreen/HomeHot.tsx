import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BoardList from 'screens/BoardListScreen/BoardList';
// import FavoriteItem from './FavoriteItem';
import {styled} from 'styled-components/native';

// interface HotItemProps {
//   subjectName: string;
//   boardTitle: string;
//   boardContents: string;
// }

// interface HomeHotProps {
//   boards: HotItemProps[];
// }

function HomeHot() {
  return (
    <ContainerView>
      <TitleView>
        <Title>인기 타임캡슐</Title>
        <MaterialIcons name="arrow-forward-ios" color="black" size={16} />
      </TitleView>
      {/* TODO - 인기 타임캡슐 컴포넌트 받아서 넣기  */}
      {/* <BoardView>
        
        {boards.map(item => (
          <FavoriteItem
            boardName={item.boardName}
            boardTitle={item.boardTitle}
            newBoard={item.newBoard}
          />
        ))}
      </BoardView> */}
      <ScrollView style={styles.scroll}>
        <BoardList
          subject="음악"
          title="2010, 서울에서 열리는"
          description="국에서 처음으로 열리는"
        />
        <BoardList
          subject="음악"
          title="2010, 서울에서 열리는 어쩌고"
          description="국에서 처음으로 열리는 어쩌고 저쩌고"
        />
      </ScrollView>
    </ContainerView>
  );
}

export default HomeHot;

const ContainerView = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  padding-left: 20;
  padding-right: 28;
  margin-top: 16;
`;

const TitleView = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 14;
  margin-bottom: 14;
`;

const Title = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 16;
  line-height: 19;
  color: #3c3c3c;
`;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    gap: 4,
    width: '100%',
  },
});
