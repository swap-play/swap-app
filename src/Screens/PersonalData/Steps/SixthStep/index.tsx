import { ScrollView, View } from 'react-native';
import { Text } from '../../../../Components/Text';
import { Input } from '../../../../Components/Input/Index';
import { BackArrowButton } from '../../../../Components/BackArrowButton';

import { Button } from '../../../../Components/Button';

import * as Animatable from 'react-native-animatable';
import { usePersonalDataForm } from '../../../../hooks/usePersonalDataForm';
import { useEffect } from 'react';
import { searchByCEP } from '../../../../services/searchByCEP/searchByCEP';

type StepProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export function SixthStep({ setStep }: StepProps) {
  const {
    control,
    errors,
    handleSubmit,
    hookFormHandleSubmit,
    getValues,
    setValue,
  } = usePersonalDataForm();

  function handleNextPage() {
    hookFormHandleSubmit(handleSubmit)();
    setStep((prevState) => prevState + 1);
  }

  useEffect(() => {
    const cep = getValues('cep');
    async function handleSearchAddressByCEP() {
      try {
        const response = await searchByCEP.get(`/${cep}/json`);

        const address = response.data;

        setValue('state', address.uf);
        setValue('city', address.localidade);
        setValue('neighbourhood', address.bairro);
        setValue('street', address.logradouro);
      } catch (error) {
        console.log(error);
      }
    }

    if (cep) {
      handleSearchAddressByCEP();
    }
  }, []);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
        paddingBottom: 100,
      }}
      showsVerticalScrollIndicator={false}
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
          <Input
            name="state"
            control={control}
            label="Estado"
            placeholder="Insira seu Estado"
            error={errors?.state?.message}
            textContentType="addressState"
          />
          <Input
            name="city"
            control={control}
            label="Cidade"
            placeholder="Insira sua Cidade"
            error={errors?.city?.message}
            textContentType="addressCity"
          />
          <Input
            name="neighbourhood"
            control={control}
            label="Bairro"
            placeholder="Insira seu Bairro"
            error={errors?.neighbourhood?.message}
          />
          <Input
            name="street"
            control={control}
            label="Endereço"
            placeholder="Ex: Rua, Avenida, etc"
            error={errors?.street?.message}
            textContentType="streetAddressLine1"
          />

          <Input
            name="number"
            control={control}
            label="Número"
            placeholder="N°"
            error={errors?.number?.message}
            keyboardType="number-pad"
          />
          <Input
            name="complement"
            control={control}
            label="Complemento"
            placeholder="Ex: Casa azul"
            error={errors?.complement?.message}
          />

          <Button
            label="Próximo"
            style={{ marginTop: 50 }}
            onPress={handleNextPage}
          />
        </View>
      </Animatable.View>
    </ScrollView>
  );
}
