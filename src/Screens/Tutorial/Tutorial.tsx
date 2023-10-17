import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { SignInStyles } from './style';
import { StackTypes } from '../../routes';
import { useNavigation } from '@react-navigation/native';

import BackArrow from '../../utils/images/backArrow.svg';
import Image from '../../utils/images/firtsImageTutorial.svg';
import RigthArrow from '../../utils/images/rightArrow.svg';
import { FirstStepTutorial } from './Steps/FirtsStep';
import { SecondStepTutorial } from './Steps/SecondStep';
import { ThirdStepTutorial } from './Steps/ThirdStep';
import { LastStepTutorial } from './Steps/LastStep';
import Breadcrumbs from '../../Components/BreadCrumbs';
const styles = SignInStyles;

export function Tutorial() {
  const [step, setStep] = useState(1);
  return (
    <>
      {step === 1 && <FirstStepTutorial setStep={setStep} />}
      {step === 2 && <SecondStepTutorial setStep={setStep} />}
      {step === 3 && <ThirdStepTutorial setStep={setStep} />}
      {step === 4 && <LastStepTutorial setStep={setStep} />}
    </>
  );
}
