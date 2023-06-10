import React, {useState, useEffect} from 'react';
import {styled} from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface LockCapsuleProps {
  lockDate: Date;
  createDate: Date;
}

const LockCapsule = ({lockDate, createDate}: LockCapsuleProps) => {
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

  return (
    <StyledView>
      <LockView>
        <MaterialIcons name="lock-outline" color="black" size={24} />
        <DateView>
          <LockDate>{remainingTime.toString()}</LockDate>
          <CreateDate>{formattedCreateDate}</CreateDate>
        </DateView>
      </LockView>
    </StyledView>
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
