import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { SignInStyles } from '../style';
import { useNavigation } from '@react-navigation/native';

import BackArrow from '../../../utils/images/backArrowWhite.svg';
import Image from '../../../utils/images/secondImageTutorial.svg';
import RigthArrow from '../../../utils/images/rightArrow.svg';
import Breadcrumbs from '../../../Components/BreadCrumbs';

const styles = SignInStyles;
type StepProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};
export function SecondStepTutorial({ setStep }: StepProps) {
  const { navigate } = useNavigation();

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
        <Breadcrumbs steps={4} activeLine={1} />
        <Text style={styles.title}>Detalhes do Jogo</Text>
        <Text style={styles.subTitle}>
          Ao selecionar um jogo da lista, você será levado para a página de
          detalhes do jogo. Aqui, você encontrará informações valiosas, como a
          plataforma do jogo, seu estado (usado ou novo) e uma breve descrição.
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
