import React, {useState, useEffect} from 'react';
import {styled} from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Modal} from 'react-native';

interface HomeDateProps {
  lockDate: string;
  createDate: string;
}

function HomeDate({lockDate, createDate}: HomeDateProps) {
  const [visible, setVisible] = useState<boolean>(false);
  const [remainingTime, setRemainingTime] = useState<string>('');

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
              <LockDate>{remainingTime}</LockDate>
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
            <DialogTitle>주위의 사람들을 소중히 여기길</DialogTitle>
            <DialogLine></DialogLine>
            <DialogDescription>
              실패를 두려워하지 마세요. 실패는 성공의 열쇠입니다. 성공하기
              위해서는 실패와 실수로부터 배우고 성장하는 것이 필수입니다.
            </DialogDescription>
            <DialogDescription>
              실패는 일시적인 것일 뿐이며, 그 속에는 소중한 교훈이 경험이 담겨
              있습니다. 실패를 두려워하지 않고 도전하고 시도하는 용기를
              가져주세요.
            </DialogDescription>
            <DialogDescription>{createDate}</DialogDescription>
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
  padding-top: 24;
  padding-bottom: 24;
  padding-right: 24;
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
  height: 320;
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
`;

const DialogLine = styled.View`
  width: 100%;
  border: 0.6px solid #dbdbdb;
`;

const DialogDescription = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 14;
  line-height: 19;
  color: #000000;
`;

const DialogButton = styled.TouchableOpacity`
  width: 100%;
  height: 47;
  background: #efefef;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const DialogButtonText = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 15;
  line-height: 18;
  color: #000000;
`;
