import React, {useState, useEffect} from 'react';
import {styled} from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Modal} from 'react-native';
import {getCloseCapsules} from 'api/capsules';

interface HomeDateProps {
  lockDate: string;
  createDate: string;
}

function HomeDate({lockDate, createDate}: HomeDateProps) {
  const [visible, setVisible] = useState<boolean>(false);
  const [remainingTime, setRemainingTime] = useState<string>('');

  useEffect(() => {
    getCloseCapsules(1).then(data => {
      console.log(data); // FIXME
    });
  }, []);

  // 2023-05-12 => 2023.05.12 (금) 작성 으로 변경
  const createDateObj = new Date(createDate);
  const formattedCreateDate =
    createDateObj.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      weekday: 'short',
    }) + ' 작성';

  // 남은 시간 계산
  // remaingTime이 변할때마다 리렌더링 (1분단위)
  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const lockDateObj = new Date(lockDate);
      const timeDiff = lockDateObj.getTime() - currentDate.getTime();

      if (timeDiff >= 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

        setRemainingTime(`${days}일, ${hours}시간 ${minutes}분 뒤 오픈`);
      } else {
        setRemainingTime('');
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [lockDate]);

  const showDialog = () => {
    const lockDateTime = new Date(lockDate);
    const currentDate = new Date();

    console.log(lockDateTime);
    if (lockDateTime <= currentDate) {
      setVisible(true);
    }
  };

  const handleCancel = () => setVisible(false);

  return (
    <>
      <StyledView>
        <DateTitle>곧 열리는 타임캡슐 시간</DateTitle>
        {remainingTime ? (
          <LockView onPress={showDialog}>
            <MaterialIcons name="lock-outline" color="black" size={24} />
            <DateView>
              <LockDate>{remainingTime.toString()}</LockDate>
              <CreateDate>{formattedCreateDate}</CreateDate>
            </DateView>
          </LockView>
        ) : (
          <LockOpenView onPress={showDialog}>
            <MaterialIcons name="lock-open" color="black" size={24} />
            <DateView>
              <LockDate>3개월 뒤에 나에게 쓰는 편지. 나...</LockDate>
              <CreateDate>{formattedCreateDate}</CreateDate>
            </DateView>
          </LockOpenView>
        )}
      </StyledView>
      <Modal
        visible={visible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCancel}>
        <ModalContent>
          <ModalView>
            <DialogUser>soft</DialogUser>
            <DialogCreate>05/12 23:15</DialogCreate>
            <DialogTitle>
              3개월 뒤에 나에게 쓰는 편지. 나는 잘 하고 있어!
            </DialogTitle>
            <DialogLine></DialogLine>
            <DialogDescription>
              실패는 성장의 기회이자 배움의 계단이니까, 어떤 일이든 괜찮아질
              거라는 것을 믿어줘.
            </DialogDescription>
            <DialogDescription>
              그리고 가족, 친구, 연인들과의 소중한 순간들을 놓치지 마! 함께하는
              시간들이 너에게 큰 힘이 될거야.
            </DialogDescription>
            <SongView>
              <MaterialIcons name="equalizer" color="black" size={18} />
              <DialogDescription>
                <Bold>now playing:</Bold> 수고했어, 오늘도 - 옥상달빛
              </DialogDescription>
            </SongView>
            <DialogButton onPress={handleCancel}>
              <DialogButtonText>확인완료</DialogButtonText>
            </DialogButton>
          </ModalView>
        </ModalContent>
      </Modal>
    </>
  );
}

export default HomeDate;

const StyledView = styled.View`
  flex: 1;
  padding-left: 24;
  padding-right: 24;
  margin-top: 23;
`;

const DateTitle = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 16;
  line-height: 19;
  color: #000000;
`;

const LockView = styled.TouchableOpacity`
  height: 65;
  flex-direction: row;
  align-items: center;
  border-radius: 50px;
  padding-left: 20;
  padding-top: 13;
  padding-right: 46;
  padding-bottom: 12;
  margin-top: 11;
  background: #ffd494;
  box-shadow: 0px 0px 15px #ffd494;
`;

const LockOpenView = styled.TouchableOpacity`
  height: 65;
  flex-direction: row;
  align-items: center;
  border-radius: 50px;
  padding-left: 20;
  padding-top: 13;
  padding-right: 46;
  padding-bottom: 12;
  margin-top: 11;
  background: #ff8c83;
  box-shadow: 0px 0px 15px #ff8c83;
`;

const DateView = styled.View`
  margin-left: 16;
`;

const LockDate = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 18;
  line-height: 22;
  color: #000000;
`;

const CreateDate = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 13;
  line-height: 16;
  color: #535353;
`;

const ModalContent = styled.View`
  flex: 1;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalView = styled.View`
  background-color: #fff;
  width: 340;
  border-radius: 15px;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 23;
  padding-left: 16;
  padding-right: 20;
  padding-bottom: 16;
`;

const DialogTitle = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 20;
  line-height: 24;
  color: #000000;
  margin-top: 6;
`;

const DialogLine = styled.View`
  width: 100%;
  border: 0.6px solid #dbdbdb;
  margin-top: 6;
  margin-bottom: 12;
`;

const DialogDescription = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 14;
  line-height: 19;
  color: #000000;
  margin-bottom: 10;
`;

const DialogButton = styled.TouchableOpacity`
  width: 100%;
  height: 47;
  background: #ff8c83;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 14;
`;

const DialogButtonText = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 15;
  line-height: 18;
  color: #000000;
`;

const DialogUser = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 11;
  line-height: 13;
  color: #afafaf;
`;

const DialogCreate = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 9;
  line-height: 11;
  color: #8f8f8f;
`;

const SongView = styled.View`
  flex-direction: row;
`;

const Bold = styled(DialogDescription)`
  font-weight: 600;
`;
