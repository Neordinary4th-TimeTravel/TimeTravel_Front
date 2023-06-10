import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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

  margin-top: 26;
`;

const Title = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 16;
  line-height: 19;
  color: #3c3c3c;
`;
