import { View, StyleSheet } from 'react-native';
import { Button } from '../../../Components/Button';
import { BackArrowButton } from '../../../Components/BackArrowButton';
import { useNavigate } from '../../../hooks/useNavigate';
import { Text } from '../../../Components/Text';
import { Dropdown } from 'react-native-element-dropdown';
import { useState } from 'react';
import ArrowDownIcon from '../../../utils/images/arrowDownIcon.svg';
import * as Animatable from 'react-native-animatable';

type StepProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

type DropDownProps = {
  label: string;
  value: number | null;
};

export function SecondStep({ setStep }: StepProps) {
  const [value, setValue] = useState<DropDownProps>({} as DropDownProps);
  const [isFocus, setIsFocus] = useState(false);
  const navigation = useNavigate();

  const options = [
    { label: 'Masculino', value: 1 },
    { label: 'Feminino', value: 2 },
    { label: 'Transgênero', value: 3 },
    { label: 'Gênero neutro', value: 4 },
    { label: 'Outro', value: 5 },
  ];

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
          style={{ marginBottom: 32, width: 160 }}
        >
          Qual o seu gênero?
        </Text>

        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={styles.container}>
            <Text size={14}>Gênero</Text>
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
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              itemContainerStyle={{
                backgroundColor: '#f2f5fd',
              }}
              itemTextStyle={{
                color: '#25323C',
                fontFamily: 'OpenSans_600SemiBold',
                fontSize: 16,
              }}
              onChange={(item) => {
                setValue(item.value);
                setIsFocus(false);
              }}
              renderRightIcon={() => (
                <ArrowDownIcon rotation={isFocus ? 180 : 0} />
              )}
            />
          </View>

          <Button
            label="Próximo"
            onPress={() => setStep((prevState) => prevState + 1)}
          />
        </View>
      </Animatable.View>
    </View>
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
