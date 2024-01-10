import React, { useState, useEffect } from 'react';
import { FirstStepTutorial } from './Steps/FirtsStep';
import { SecondStepTutorial } from './Steps/SecondStep';
import { ThirdStepTutorial } from './Steps/ThirdStep';
import { LastStepTutorial } from './Steps/LastStep';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../../routes';

type TutorialProps = NativeStackScreenProps<StackParamList, 'Tutorial'>;

export function Tutorial({ route }: TutorialProps) {
  const { params } = route;

  const [step, setStep] = useState(params?.stepNumber || 1);

  return (
    <>
      {step === 1 && <FirstStepTutorial setStep={setStep} />}
      {step === 2 && <SecondStepTutorial setStep={setStep} />}
      {step === 3 && <ThirdStepTutorial setStep={setStep} />}
      {step === 4 && <LastStepTutorial setStep={setStep} />}
    </>
  );
}
