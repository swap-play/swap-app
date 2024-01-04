import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Button } from '../../Components/Button';
import BackArrow from '../../utils/images/backArrow.svg';

import {
  CheckboxContainer,
  Container,
  OptionSignContainer,
  PasswordOptionContainer,
  PasswordOptionLabel,
  Subtitle,
  Title,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../Components/Input/Index';
import { OtherOptionsSingin } from '../../Components/OtherOptionsSignin';

export function SignIn() {
  const [isChecked, setIsChecked] = useState(false);
  const { navigate } = useNavigation();

  function handleRemeberPassword() {
    setIsChecked((prevState) => !prevState);
  }

  return (
    <Container>
      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 15,
          marginTop: 12,
        }}
        onPress={() => navigate('FirstScreen' as never)}
      >
        <BackArrow width={12} height={24} />
      </TouchableOpacity>

      <Title>Acesse</Title>
      <Subtitle>Com e-mail e senha para entrar</Subtitle>

      <View style={{ gap: 16 }}>
        <Input label="E-mail" placeholder="Digite seu e-mail" />

        <Input label="Senha" placeholder="Digite sua senha" />
      </View>

      <PasswordOptionContainer>
        <CheckboxContainer>
          <Checkbox
            color="#8B5FD9"
            value={isChecked}
            onValueChange={setIsChecked}
            style={{ width: 20, height: 20 }}
          />
          <PasswordOptionLabel>Lembrar minha senha</PasswordOptionLabel>
        </CheckboxContainer>

        <TouchableOpacity>
          <PasswordOptionLabel>Esqueci minha senha</PasswordOptionLabel>
        </TouchableOpacity>
      </PasswordOptionContainer>

      <OptionSignContainer>
        <Button label="Acessar" />

        <Button
          outlined
          label="Cadastrar"
          onPress={() => navigate('Register' as never)}
        />
      </OptionSignContainer>

      <OtherOptionsSingin />
    </Container>
  );
}
