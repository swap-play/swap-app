import { View, Pressable, Platform, TextInput } from 'react-native';
import { Text } from '../../../../Components/Text';
import { BackArrowButton } from '../../../../Components/BackArrowButton';

import { Button } from '../../../../Components/Button';
import * as Animatable from 'react-native-animatable';
import { usePersonalDataForm } from '../../../../hooks/usePersonalDataForm';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { formatDate } from '../../../../utils/formatDate';
import { DateInputText } from './styles';

type StepProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export function ThirdStep({ setStep }: StepProps) {
  const { control, errors, getValues } = usePersonalDataForm();
  const [isVisible, setIsVisible] = useState(false);

  const errorStyle = { borderColor: '#FC5050', borderWidth: 2 };

  const [inputValue, setInputValue] = useState(
    formatDate(getValues('birthday')),
  );

  function handleNextPage() {
    setStep((prevState) => prevState + 1);
  }

  function handleToggle() {
    setIsVisible((prevState) => !prevState);
  }

  const onChangeDatePicker = (
    event: DateTimePickerEvent,
    selectedDate?: Date,
  ) => {
    if (event.type === 'set') {
      handleToggle();
      setInputValue(formatDate(selectedDate!));
    } else {
      handleToggle();
    }
  };

  useEffect(() => {
    if (formatDate(getValues('birthday')) === formatDate(new Date())) {
      setInputValue('');
    }
  }, []);

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
          {isVisible && (
            <Controller
              control={control}
              name="birthday"
              defaultValue={undefined}
              render={({ field: { onChange, value } }) => (
                <DateTimePicker
                  mode="date"
                  display="default"
                  onChange={(event, selectedDate) => {
                    onChangeDatePicker(event, selectedDate);
                    onChange(selectedDate);
                  }}
                  value={value || new Date()}
                />
              )}
            />
          )}

          <Pressable onPress={handleToggle} style={{ width: '100%' }}>
            <Text size={14} color="#2E3E4B">
              Data de nascimento
            </Text>

            <DateInputText
              value={inputValue}
              style={[errors?.birthday?.message ? errorStyle : {}]}
              placeholder="Selecione a data de seu nascimento"
              onChangeText={setInputValue}
              placeholderTextColor="#bebebe"
              editable={false}
            />
            {errors?.birthday?.message && (
              <Text size={12} color="#FC5050" weight="600SemiBold">
                {errors?.birthday?.message}
              </Text>
            )}
          </Pressable>

          <Button label="Próximo" onPress={handleNextPage} />
        </View>
      </Animatable.View>
    </View>
  );
}
