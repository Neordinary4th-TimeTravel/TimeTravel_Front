import React from 'react';
import {styled} from 'styled-components/native';

interface FavoriteItemProps {
  boardName: string;
  boardTitle: string;
  newBoard: boolean;
}

function FavoriteItem({boardName, boardTitle, newBoard}: FavoriteItemProps) {
  return (
    <StyledView>
      <BoardView>
        <BoardTitle>{boardName}</BoardTitle>
        <BoardText>{boardTitle}</BoardText>
      </BoardView>
      <>
        {newBoard ? (
          <NewButtonView>
            <NewButtonText>N</NewButtonText>
          </NewButtonView>
        ) : null}
      </>
    </StyledView>
  );
}

export default FavoriteItem;

const StyledView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const BoardView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;

const BoardTitle = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 13;
  line-height: 16;
  color: #3c3c3c;
  margin-bottom: 10;
  margin-right: 7;
`;

const BoardText = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 11;
  line-height: 13;
  color: #717171;
`;

const NewButtonView = styled.View`
  width: 12;
  height: 12;
  background: #ff8c83;
  border-radius: 2px;
`;

const NewButtonText = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 8;
  line-height: 10;
  color: #3c3c3c;
  text-align: center;
`;
