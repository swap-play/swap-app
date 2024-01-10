import { View } from 'react-native';
import { Text } from '../../../../Components/Text';
import { Input } from '../../../../Components/Input/Index';
import { BackArrowButton } from '../../../../Components/BackArrowButton';
import { Button } from '../../../../Components/Button';

import * as Animatable from 'react-native-animatable';
import { usePersonalDataForm } from '../../../../hooks/usePersonalDataForm';

type StepProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export function FifthStep({ setStep }: StepProps) {
  const { control, errors } = usePersonalDataForm();

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
          Informe o seu CEP
        </Text>

        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 50,
          }}
        >
          <Input
            name="cep"
            control={control}
            label="CEP"
            placeholder="00000-000"
            keyboardType="number-pad"
            textContentType="postalCode"
            error={errors.cep?.message}
          />

          <Button
            label="Próximo"
            style={{ marginTop: 50 }}
            onPress={handleNextPage}
          />
        </View>
      </Animatable.View>
    </View>
  );
}
