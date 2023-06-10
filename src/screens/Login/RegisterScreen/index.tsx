import React, {useState} from 'react';
import {styled} from 'styled-components/native';
import EmailScreen from './EmailScreen';
import NicknameScreen from './NicknameScreen';

export default function () {
  const [step, setStep] = useState<number>(0);

  const onNext = () => {
    setStep(1);
  };

  return (
    <StyledView>
      {step === 0 ? <EmailScreen onNext={onNext} /> : <NicknameScreen />}
    </StyledView>
  );
}

const StyledView = styled.View`
  flex: 1;
`;
