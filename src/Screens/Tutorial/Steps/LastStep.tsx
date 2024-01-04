import React from 'react';
import { Text, TouchableOpacity, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { SignInStyles } from '../style';

import BackArrow from '../../../utils/images/backArrowWhite.svg';
import Image from '../../../utils/images/lastImageTutorial.svg';
import RigthArrow from '../../../utils/images/rightArrow.svg';
import Breadcrumbs from '../../../Components/BreadCrumbs';
import { useNavigate } from '../../../hooks/useNavigate';

const styles = SignInStyles;

type StepProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};
export function LastStepTutorial({ setStep }: StepProps) {
  const navigation = useNavigate();

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <TouchableOpacity>
        <BackArrow
          width={12}
          height={24}
          onPress={() => setStep((step) => step - 1)}
          style={{ marginTop: 8, marginLeft: 8 }}
          color="white"
        />
      </TouchableOpacity>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.header}>
        <Image height={400} />
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.content}>
        <Breadcrumbs steps={4} activeLine={3} />
        <Text style={styles.title}>Lista de Trocas Sugeridas</Text>
        <Text style={styles.subTitle}>
          Após criar o anúncio, você será direcionado para a lista de trocas
          sugeridas. Nesta tela, você encontrará uma seleção de jogos que outros
          usuários estão dispostos a oferecer em troca do seu jogo anunciado.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation('PersonalData')}
        >
          <RigthArrow />
        </TouchableOpacity>
        <Text style={styles.text}>Pular</Text>
      </Animatable.View>
    </ScrollView>
  );
}
