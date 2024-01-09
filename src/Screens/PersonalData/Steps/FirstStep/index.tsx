import { View } from 'react-native';
import { Text } from '../../../../Components/Text';
import { Input } from '../../../../Components/Input/Index';
import { BackArrowButton } from '../../../../Components/BackArrowButton';
import { useNavigate } from '../../../../hooks/useNavigate';
import { Button } from '../../../../Components/Button';
import * as Animatable from 'react-native-animatable';
import { useAuth } from '../../../../hooks/useAuth';
import { usePersonalDataForm } from '../../../../hooks/usePersonalDataForm';

type StepProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export function FirstStep({ setStep }: StepProps) {
  const navigation = useNavigate();

  const { control, errors } = usePersonalDataForm();
  const { signout } = useAuth();

  function handleNextPage() {
    setStep((prevState) => prevState + 1);
  }

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
        onPress={() => navigation('Tutorial', { stepNumber: 4 })}
        style={{ marginBottom: 54 }}
      />

      <Animatable.View animation="fadeInRight" delay={200} style={{ flex: 1 }}>
        <Text
          color="#2E3E4B"
          size={30}
          weight="700Bold"
          style={{ marginBottom: 32 }}
        >
          Como deseja ser chamado(a)?
        </Text>

        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Input
            name="name"
            control={control}
            label="Nome"
            placeholder="Digite seu nome"
            error={errors?.name?.message}
          />

          <Button label="Próximo" onPress={handleNextPage} />
          <Button label="Sar" onPress={signout} />
        </View>
      </Animatable.View>
    </View>
  );
}
