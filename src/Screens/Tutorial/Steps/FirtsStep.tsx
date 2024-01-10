import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { SignInStyles } from '../style';
import { useNavigation } from '@react-navigation/native';

import BackArrow from '../../../utils/images/backArrowWhite.svg';
import Image from '../../../utils/images/firtsImageTutorial.svg';
import RigthArrow from '../../../utils/images/rightArrow.svg';
import Breadcrumbs from '../../../Components/BreadCrumbs';

const styles = SignInStyles;
type StepProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export function FirstStepTutorial({ setStep }: StepProps) {
  const { navigate } = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <TouchableOpacity>
        <BackArrow
          width={12}
          height={24}
          onPress={() => navigate('Tutorial' as never)}
          style={{ marginTop: 8, marginLeft: 8 }}
          color="white"
        />
      </TouchableOpacity>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.header}>
        <Image height={400} />
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.content}>
        <Breadcrumbs steps={4} activeLine={0} />
        <Text style={styles.title}>Página inicial</Text>
        <Text style={styles.subTitle}>
          Nela, você encontrará as últimas novidades de jogos disponíveis para
          troca. Role para cima e para baixo para descobrir títulos emocionantes
          que outros jogadores estão oferecendo para troca. Toque em um jogo
          para ver mais detalhes sobre ele.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setStep((step) => step + 1)}
        >
          <RigthArrow />
        </TouchableOpacity>
        <Text style={styles.text}>Pular</Text>
      </Animatable.View>
    </ScrollView>
  );
}
