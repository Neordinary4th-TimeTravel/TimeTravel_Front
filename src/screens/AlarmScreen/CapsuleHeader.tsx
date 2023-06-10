import React, {useState} from 'react';
import {styled} from 'styled-components/native';
import CapsuleTag from './CapsuleTag';
import CapsuleSight from './CapsuleSight';
import CapsuleMember from './CapsuleMember';

function CapsuleHeader() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabList = ['내가 쓴 캡슐(공개)', '비공개', '내가 받은 캡슐'];

  const renderScreen = () => {
    switch (activeTab) {
      case 0:
        return <CapsuleMember />;
      case 1:
        return <CapsuleSight />;
      case 2:
        return <CapsuleTag />;
      default:
        return null;
    }
  };

  return (
    <ConatainerView>
      <StyledView>
        {tabList.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {activeTab === index ? (
                <MenuText onPress={() => setActiveTab(index)}>{item}</MenuText>
              ) : (
                <UnText onPress={() => setActiveTab(index)}>{item}</UnText>
              )}
              {index !== tabList.length - 1 && <UnText>|</UnText>}
            </React.Fragment>
          );
        })}
      </StyledView>
      {renderScreen()}
    </ConatainerView>
  );
}

export default CapsuleHeader;

const ConatainerView = styled.View`
  flex-direction: column;
`;

const StyledView = styled.View`
  width: 100%;
  height: 77px;
  align-items: center;
  background: #282828;
  border-radius: 0px 0px 20px 20px;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 43px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 15px;
  margin-bottom: 15px;
`;

const MenuText = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: white;
`;

const UnText = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #636363;
`;
