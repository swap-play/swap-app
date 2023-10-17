import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Button } from '../../components/Button';
import BackArrow from '../../utils/images/backArrow.svg';
import FacebookLogo from '../../utils/images/fbc-logo.svg';
import GoogleLogo from '../../utils/images/google-logo.svg';
import {
  CheckboxContainer,
  Container,
  InputContainer,
  InputText,
  Label,
  OptionSignContainer,
  OtherOptionsContainer,
  PasswordOptionContainer,
  PasswordOptionLabel,
  SocialsContainer,
  Subtitle,
  Title,
} from './styles';

export function SignIn() {
  const [isChecked, setIsChecked] = useState(false);

  function handleRemeberPassword() {
    setIsChecked((prevState) => !prevState);
  }

  return (
    <Container>
      <TouchableOpacity>
        <BackArrow width={12} height={24} />
      </TouchableOpacity>

      <Title>Acesse</Title>
      <Subtitle>Com E-mail e senha para entrar</Subtitle>

      <InputContainer style={{ marginBottom: 16 }}>
        <Label>E-mail</Label>
        <InputText
          placeholder="Digite seu e-mail"
          placeholderTextColor="#D9D9D9"
        />
      </InputContainer>

      <InputContainer>
        <Label>Senha</Label>
        <InputText
          placeholder="Digite sua senha"
          placeholderTextColor="#D9D9D9"
        />
      </InputContainer>

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
        <Button backgroundColor="#8B5FD9" text="Acessar" width="48%" />

        <Button outlined backgroundColor="#fff" text="Cadastrar" width="48%" />
      </OptionSignContainer>

      <OtherOptionsContainer>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
          }}
        >
          <View
            style={{
              backgroundColor: '#D7D7D7',
              width: 48,
              height: 2,
              marginTop: 5,
            }}
          />
          <Text>Ou continue com</Text>
          <View
            style={{
              backgroundColor: '#D7D7D7',
              width: 48,
              height: 2,
              marginTop: 5,
            }}
          />
        </View>

        <SocialsContainer>
          <View
            style={{ backgroundColor: '#E0E2E4', padding: 6, borderRadius: 5 }}
          >
            <GoogleLogo width={28} height={28} />
          </View>

          <View
            style={{ backgroundColor: '#E0E2E4', padding: 6, borderRadius: 5 }}
          >
            <FacebookLogo width={28} height={28} />
          </View>
        </SocialsContainer>
      </OtherOptionsContainer>
    </Container>
  );
}
