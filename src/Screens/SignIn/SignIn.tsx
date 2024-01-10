import { useState } from 'react';
import { ToastAndroid, TouchableOpacity, View } from 'react-native';
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
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/useAuth';

const schema = z.object({
  email: z
    .string({ required_error: 'E-mail é obrigatório' })
    .min(1, 'E-mail é obrigatório')
    .email('Informe um e-mail válido'),
  password: z.string({ required_error: 'Senha é obrigatória' }),
});

type FormData = z.infer<typeof schema>;

export function SignIn() {
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { navigate } = useNavigation();

  function handleRemeberPassword() {
    setIsChecked((prevState) => !prevState);
  }

  const {
    handleSubmit: hookFormHandleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    reValidateMode: 'onSubmit',
  });

  const { signin } = useAuth();

  const handleSubmit = async ({ email, password }: FormData) => {
    setIsLoading(true);

    try {
      const response = await api.post('/auth/signin', { email, password });
      const { accessToken } = response.data;

      signin(accessToken);
    } catch (error) {
      console.log(error);
      ToastAndroid.show(
        'Não foi possível fazer o login. Tente novamente!',
        ToastAndroid.SHORT,
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container pointerEvents={isLoading ? 'none' : 'auto'}>
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
        <Input
          name="email"
          label="E-mail"
          textContentType="emailAddress"
          keyboardType="email-address"
          placeholder="Digite seu e-mail"
          control={control}
          error={errors.email?.message}
        />

        <Input
          name="password"
          label="Senha"
          placeholder="Digite sua senha"
          control={control}
          secureTextEntry
          textContentType="password"
          error={errors.password?.message}
        />
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
        <Button
          label="Acessar"
          onPress={hookFormHandleSubmit(handleSubmit)}
          loading={isLoading}
        />

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
