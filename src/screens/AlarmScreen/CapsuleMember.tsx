import {View} from 'react-native';
import React from 'react';
import {styled} from 'styled-components/native';
// import {useState} from 'react';
// import UnLockCapsule from './UnLockCapsule';
// import LockCapsule from './LockCapsule';
import {getCapsulMember} from 'api/myCapsule';

// interface CapsuleProps {
//   lockDate: Date;
//   createDate: Date;
// }

getCapsulMember();

const CapsuleMember = () => {
  // const [closedList, setClosedList] = useState<CapsuleProps[]>([]);
  // const [openedList, setOpenedList] = useState<CapsuleProps[]>([]);

  return (
    <View>
      <OpenText>오픈예정</OpenText>

      <StyledView>
        {/* {closedList.map((item: CapsuleProps, index: number) => (
          <LockCapsule
            key={index}
            lockDate={item.lockDate}
            createDate={item.createDate}
          />
        ))}
      </StyledView>
      <Line></Line>
      <OpenText>오픈완료</OpenText>
      <StyledView>
        {openedList.map((item: CapsuleProps, index: number) => (
          <UnLockCapsule
            key={index}
            lockDate={item.lockDate}
            createDate={item.createDate}
          />
        ))} */}
      </StyledView>
    </View>
  );
};

export default CapsuleMember;

const StyledView = styled.View`
  margin-top: 9;
  width: 100%;
`;

const OpenText = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 12;
  line-height: 15;
  color: #000000;
  margin-top: 19;
  margin-left: 26;
`;

// const Line = styled.View`
//   width: 100%;
//   border: 0.6px solid #d8d8d8;
//   margin-top: 19;
// `;
