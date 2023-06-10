import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FavoriteItem from './FavoriteItem';
import {styled} from 'styled-components/native';

interface FavoriteItemProps {
  boardName: string;
  boardTitle: string;
  newBoard: boolean;
}

interface HomeFavortieProps {
  boards: FavoriteItemProps[];
}

function HomeFavortie({boards}: HomeFavortieProps) {
  return (
    <ContainerView>
      <TitleView>
        <Title>즐겨찾는 게시판</Title>
        <MaterialIcons name="arrow-forward-ios" color="black" size={16} />
      </TitleView>
      <BoardView>
        {boards.map((item, index) => (
          <FavoriteItem
            key={index}
            boardName={item.boardName}
            boardTitle={item.boardTitle}
            newBoard={item.newBoard}
          />
        ))}
      </BoardView>
    </ContainerView>
  );
}

export default HomeFavortie;

const ContainerView = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  padding-left: 20;
  padding-right: 28;
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

const BoardView = styled.View`
  width: 100%;
  margin-top: 13;
  background-color: white;
  border-radius: 10px;
  padding-left: 11;
  padding-right: 13;
  padding-top: 16;
  padding-bottom: 5;
`;
