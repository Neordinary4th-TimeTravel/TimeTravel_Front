import React, {useState, useEffect} from 'react';
import {styled} from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Modal} from 'react-native';

interface LockCapsuleProps {
  lockDate: string;
  createDate: string;
}

const LockCapsule = ({lockDate, createDate}: LockCapsuleProps) => {
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
    const runInterval = () => {
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
    };

    runInterval();

    const interval = setInterval(() => {
      runInterval;
    }, 60000);

    return () => clearInterval(interval);
  }, [lockDate]);

  const showDialog = () => {
    const lockDateTime = new Date(lockDate);
    const currentDate = new Date();

    console.log(lockDateTime);
    if (lockDateTime > currentDate) {
      setVisible(true);
    }
  };

  const handleCancel = () => setVisible(false);

  return (
    <>
      <StyledView>
        <LockView onPress={showDialog}>
          <MaterialIcons name="lock-outline" color="black" size={24} />
          <DateView>
            <LockDate>{remainingTime.toString()}</LockDate>
            <CreateDate>{formattedCreateDate}</CreateDate>
          </DateView>
        </LockView>
      </StyledView>
      <Modal
        visible={visible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCancel}>
        <ModalContent>
          <ModalView>
            <MaterialIcons name="priority-high" color="black" size={65} />
            <DialogTitle>아직 열람하지 못해요!</DialogTitle>
            <DialogLine></DialogLine>
            <DialogDescription>
              지금으로부터 9일 뒤, 10시간 14분이 지나야 열 수 있어요.
            </DialogDescription>
            <DialogButton onPress={handleCancel}>
              <DialogButtonText>확인완료</DialogButtonText>
            </DialogButton>
          </ModalView>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LockCapsule;

const StyledView = styled.View`
  padding-left: 24;
  padding-right: 24;
  margin-top: 9;
`;

const LockView = styled.TouchableOpacity`
  height: 87;
  flex-direction: row;
  align-items: center;
  padding-left: 20;
  padding-right: 46;
  background: #ffffff;
  border-radius: 30px;
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
  justify-content: center;
  align-items: center;
  padding-top: 29;
  padding-left: 28;
  padding-right: 29;
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
