import { ScrollView, View } from 'react-native';
import { Text } from '../../../Components/Text';
import { Input } from '../../../Components/Input/Index';
import { BackArrowButton } from '../../../Components/BackArrowButton';
import { useNavigate } from '../../../hooks/useNavigate';
import { Button } from '../../../Components/Button';

import * as Animatable from 'react-native-animatable';

type StepProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export function FifthStep({ setStep }: StepProps) {
  const navigation = useNavigate();

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
        paddingBottom: 100,
      }}
    >
      <BackArrowButton
        onPress={() => setStep((prevState) => prevState - 1)}
        style={{ marginBottom: 54 }}
      />
      <Animatable.View animation="fadeInRight" delay={200} style={{ flex: 1 }}>
        <Text
          color="#2E3E4B"
          size={30}
          weight="700Bold"
          style={{ marginBottom: 32 }}
        >
          Complete seus dados
        </Text>

        <Text
          color="#2E3E4B"
          size={16}
          weight="600SemiBold"
          style={{ marginBottom: 32 }}
        >
          Falta pouco!
        </Text>

        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 50,
          }}
        >
          <Input label="Estado" placeholder="Insira seu Estado" />
          <Input label="Cidade" placeholder="Insira sua Cidade" />
          <Input label="Bairro" placeholder="Insira seu Bairro" />
          <Input label="Endereço" placeholder="Ex: Rua, Avenida, etc" />

          <Input label="Número" placeholder="N°" />
          <Input label="Complemento" placeholder="Ex: Casa azul" />

          <Button
            label="Próximo"
            style={{ marginTop: 50 }}
            onPress={() => setStep((prevState) => prevState + 1)}
          />
        </View>
      </Animatable.View>
    </ScrollView>
  );
}
