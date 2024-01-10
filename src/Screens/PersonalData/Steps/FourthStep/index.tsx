import { Image, View } from 'react-native';
import { Text } from '../../../../Components/Text';

import { BackArrowButton } from '../../../../Components/BackArrowButton';
import { Button } from '../../../../Components/Button';
import CameraIcon from '../../../../utils/images/camera.svg';
import * as Animatable from 'react-native-animatable';
import { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { usePersonalDataForm } from '../../../../hooks/usePersonalDataForm';
import { AvatarSkeleton, Container, FormWrapper } from './styles';

type StepProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export function FourthStep({ setStep }: StepProps) {
  const { setValue, getValues, errors } = usePersonalDataForm();

  const [image, setImage] = useState('');

  const pickImageOrTakePhoto = async (type: 'photo' | 'gallery') => {
    const options: ImagePicker.ImagePickerOptions = {
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    };

    if (type === 'photo') {
      const result = await ImagePicker.launchCameraAsync(options);
      if (!result.canceled) {
        setImage(result?.assets[0]?.uri);
        setValue('avatar', result?.assets[0]?.uri);
      }
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync(options);

    if (!result.canceled) {
      console.log(result.assets[0]);
      setImage(result?.assets[0]?.uri);
      setValue('avatar', result?.assets[0]?.uri);
    }
  };

  useEffect(() => {
    const avatar = getValues('avatar');

    setImage(avatar!);
  }, []);

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
          style={{ marginBottom: 32 }}
        >
          Tire ou escolha uma foto de perfil
        </Text>

        <FormWrapper>
          <View style={{ flexDirection: 'row', gap: 20 }}>
            <Button
              outlined
              label="Galeria"
              style={{ width: '45%' }}
              onPress={() => pickImageOrTakePhoto('gallery')}
            />
            <Button
              imageSvg={<CameraIcon />}
              transparent
              label="Tirar foto"
              style={{ width: '45%', paddingLeft: 20 }}
              onPress={() => pickImageOrTakePhoto('photo')}
            />
          </View>

          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: 314, height: 314, borderRadius: 157 }}
            />
          ) : (
            <AvatarSkeleton />
          )}

          <Button
            label="Próximo"
            onPress={() => setStep((prevState) => prevState + 1)}
          />
        </FormWrapper>
      </Animatable.View>
    </Container>
  );
}
