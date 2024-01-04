import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Text } from '../../../Components/Text';
import { Input } from '../../../Components/Input/Index';
import { BackArrowButton } from '../../../Components/BackArrowButton';
import { useNavigate } from '../../../hooks/useNavigate';
import { Button } from '../../../Components/Button';

import { SelectionButton } from '../../../Components/SelectionButton';
import * as Animatable from 'react-native-animatable';

type StepProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export function SixthStep({ setStep }: StepProps) {
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
          Quais ás suas plataformas favoritas?
        </Text>

        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 50,
            gap: 16,
          }}
        >
          <View style={{ flexDirection: 'row', gap: 20 }}>
            <SelectionButton label="PS5" />
            <SelectionButton label="Xbox Series X/S" />
            <SelectionButton label="PS4" />
          </View>
          <View style={{ flexDirection: 'row', gap: 20 }}>
            <SelectionButton label="Xbox One" />
            <SelectionButton label="Nintendo Switch" />
          </View>

          <View
            style={{
              flexDirection: 'row',
              gap: 20,
            }}
          >
            <SelectionButton label="PS3" />
            <SelectionButton label="Xbox 360" />
          </View>

          <Button
            label="Próximo"
            style={{ marginTop: 300 }}
            // onPress={() => setStep((prevState) => prevState + 1)}
          />
        </View>
      </Animatable.View>
    </ScrollView>
  );
}
