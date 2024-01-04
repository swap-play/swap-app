import { View } from 'react-native';
import { Text } from '../../../Components/Text';
import { Input } from '../../../Components/Input/Index';
import { BackArrowButton } from '../../../Components/BackArrowButton';
import { useNavigate } from '../../../hooks/useNavigate';
import { Button } from '../../../Components/Button';
import * as Animatable from 'react-native-animatable';

type StepProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export function ThirdStep({ setStep }: StepProps) {
  const navigation = useNavigate();

  return (
    <View
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
          Qual a sua data de nascimento?
        </Text>

        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Input label="Data de nascimento" placeholder="DD/MM/AAAA" />

          <Button
            label="Próximo"
            onPress={() => setStep((prevState) => prevState + 1)}
          />
        </View>
      </Animatable.View>
    </View>
  );
}
