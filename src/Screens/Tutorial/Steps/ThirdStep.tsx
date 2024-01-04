import React from 'react';
import { Text, TouchableOpacity, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { SignInStyles } from '../style';

import BackArrow from '../../../utils/images/backArrowWhite.svg';
import Image from '../../../utils/images/thirdImageTutorial.svg';
import RigthArrow from '../../../utils/images/rightArrow.svg';
import Breadcrumbs from '../../../Components/BreadCrumbs';

const styles = SignInStyles;
type StepProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};
export function ThirdStepTutorial({ setStep }: StepProps) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <TouchableOpacity>
        <BackArrow
          width={12}
          height={24}
          onPress={() => setStep((step) => step - 1)}
          style={{ marginTop: 8, marginLeft: 8 }}
        />
      </TouchableOpacity>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.header}>
        <Image height={400} />
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.content}>
        <Breadcrumbs steps={4} activeLine={2} />
        <Text style={styles.title}>Criar Anúncio de Troca</Text>
        <Text style={styles.subTitle}>
          Para iniciar o processo de troca, você precisa iniciar chat e falar
          sobre o jogo que deseja oferecer. Na tela de criação de anúncio,
          coloque ás informações básica e faça o anúncio
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
