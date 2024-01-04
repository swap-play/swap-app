import { View } from 'react-native';
import { Text } from '../../../Components/Text';
import { Input } from '../../../Components/Input/Index';
import { BackArrowButton } from '../../../Components/BackArrowButton';
import { useNavigate } from '../../../hooks/useNavigate';
import { Button } from '../../../Components/Button';
import CameraIcon from '../../../utils/images/camera.svg';
import * as Animatable from 'react-native-animatable';

type StepProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export function FourthStep({ setStep }: StepProps) {
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
          Tire ou escolha uma foto de perfil
        </Text>

        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={{ flexDirection: 'row', gap: 20 }}>
            <Button outlined label="Galeria" style={{ width: '45%' }} />
            <Button
              imageSvg={<CameraIcon />}
              transparent
              label="Tirar foto"
              style={{ width: '45%', paddingLeft: 20 }}
            />
          </View>

          <View
            style={{
              width: 314,
              height: 314,
              backgroundColor: '#e1e1e1',
              borderRadius: 157,
            }}
          />

          <Button
            label="Próximo"
            onPress={() => setStep((prevState) => prevState + 1)}
          />
        </View>
      </Animatable.View>
    </View>
  );
}
