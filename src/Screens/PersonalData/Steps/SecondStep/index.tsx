import { View, StyleSheet } from 'react-native';
import { Button } from '../../../../Components/Button';
import { BackArrowButton } from '../../../../Components/BackArrowButton';
import { Text } from '../../../../Components/Text';
import { Dropdown } from 'react-native-element-dropdown';
import { useState } from 'react';
import ArrowDownIcon from '../../../../utils/images/arrowDownIcon.svg';
import * as Animatable from 'react-native-animatable';
import { usePersonalDataForm } from '../../../../hooks/usePersonalDataForm';
import { Controller } from 'react-hook-form';
import { Container, FormWrapper } from './styles';

type StepProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

type DropDownProps = {
  label: string;
  value: number | null;
};

export function SecondStep({ setStep }: StepProps) {
  const [isFocus, setIsFocus] = useState(false);

  const options = [
    { label: 'Masculino', value: 1 },
    { label: 'Feminino', value: 2 },
    { label: 'Transgênero', value: 3 },
    { label: 'Gênero neutro', value: 4 },
    { label: 'Outro', value: 5 },
  ];

  const { control, errors } = usePersonalDataForm();

  function handleNextPage() {
    setStep((prevState) => prevState + 1);
  }

  return (
    <Container>
      <BackArrowButton
        onPress={() => setStep((prevState) => prevState - 1)}
        style={{ marginBottom: 54 }}
      />
      <Animatable.View animation="fadeInRight" delay={200} style={{ flex: 1 }}>
        <Text
          color="#2E3E4B"
          size={30}
          weight="700Bold"
          style={{ marginBottom: 32, width: 160 }}
        >
          Qual o seu gênero?
        </Text>

        <FormWrapper>
          <View style={styles.container}>
            <Text size={14} color="#2E3E4B">
              Gênero
            </Text>
            <Controller
              name="gender"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Dropdown
                  style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                  placeholderStyle={styles.placeholderStyle}
                  placeholder="Escolha uma opção"
                  selectedTextStyle={styles.selectedTextStyle}
                  iconStyle={styles.iconStyle}
                  data={options}
                  labelField="label"
                  valueField="value"
                  value={value}
                  onChange={onChange}
                  onFocus={() => setIsFocus(true)}
                  onBlur={onBlur}
                  itemContainerStyle={{
                    backgroundColor: '#f2f5fd',
                  }}
                  itemTextStyle={{
                    color: '#25323C',
                    fontFamily: 'OpenSans_600SemiBold',
                    fontSize: 16,
                  }}
                  renderRightIcon={() => (
                    <ArrowDownIcon rotation={isFocus ? 180 : 0} />
                  )}
                />
              )}
            />

            {errors?.gender?.message && (
              <Text size={12} color="#FC5050" weight="600SemiBold">
                {errors?.gender?.message}
              </Text>
            )}
          </View>

          <Button label="Próximo" onPress={handleNextPage} />
        </FormWrapper>
      </Animatable.View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  dropdown: {
    height: 70,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: '#f2f5fd',
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: '#f2f5fd',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#25323C',
    fontFamily: 'OpenSans_600SemiBold',
  },
  selectedTextStyle: {
    backgroundColor: '#f2f5fd',
    fontSize: 16,
    color: '#25323C',
    fontFamily: 'OpenSans_600SemiBold',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
