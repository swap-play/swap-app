import { useState } from 'react';
import { FirstStep } from './Steps/FirstStep';
import { SecondStep } from './Steps/SecondStep';
import { StackParamList } from '../../routes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ThirdStep } from './Steps/ThirdStep';
import { FourthStep } from './Steps/FourthStep';
import { FifthStep } from './Steps/FifthStep';
import { SixthStep } from './Steps/SixthStep';

type PersonalDataProps = NativeStackScreenProps<StackParamList, 'PersonalData'>;

export function PersonalData() {
  const [step, setStep] = useState(1);

  return (
    <>
      {step === 1 && <FirstStep setStep={setStep} />}
      {step === 2 && <SecondStep setStep={setStep} />}
      {step === 3 && <ThirdStep setStep={setStep} />}
      {step === 4 && <FourthStep setStep={setStep} />}
      {step === 5 && <FifthStep setStep={setStep} />}
      {step === 6 && <SixthStep setStep={setStep} />}
    </>
  );
}
