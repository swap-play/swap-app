import { TouchableOpacity, View, ToastAndroid } from 'react-native';
import { Container, Form, Subtitle, Title } from './styles';
import BackArrow from '../../utils/images/backArrow.svg';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../Components/Button';

import { Input } from '../../Components/Input/Index';
import { OtherOptionsSingin } from '../../Components/OtherOptionsSignin';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { api } from '../../services/api';
import { useState } from 'react';

const schema = z
  .object({
    email: z
      .string({ required_error: 'E-mail é obrigatório' })
      .min(1, 'E-mail é obrigatório')
      .email('Informe um e-mail válido'),
    confirmEmail: z
      .string({ required_error: 'Campo obrigatório' })
      .min(1, 'Campo obrigatório')
      .email('Informe um e-mail válido'),
    password: z
      .string({ required_error: 'Senha é obrigatória' })
      .min(8, 'A senha deve conter 8 ou mais digítos'),
    confirmPassword: z
      .string({ required_error: 'Campo obrigatório' })
      .min(8, 'A senha deve conter 8 ou mais digítos'),
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: 'Os e-mails não coincidem',
    path: ['confirmEmail'],
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  });

type FormData = z.infer<typeof schema>;

export function Register() {
  const { navigate } = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit: hookFormHandleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    reValidateMode: 'onSubmit',
  });

  const handleSubmit = async ({ email, password }: FormData) => {
    setIsLoading(true);
    try {
      await api.post('/users', { email, password });
      ToastAndroid.show(
        'Cadastrado realizado com sucesso!',
        ToastAndroid.SHORT,
      );
      ToastAndroid.TOP;
      navigate('SignIn' as never);
    } catch (error) {
      const errorMessage = error.response.data.message;
      const statusCode = error.response.data.statusCode;

      ToastAndroid.show(
        statusCode >= 500
          ? 'Não foi possível fazer o cadastro. Tente novamente!'
          : errorMessage,
        ToastAndroid.SHORT,
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container
      showsVerticalScrollIndicator={false}
      pointerEvents={isLoading ? 'none' : 'auto'}
    >
      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 15,
          marginTop: 12,
        }}
        onPress={() => navigate('SignIn' as never)}
      >
        <BackArrow width={12} height={24} />
      </TouchableOpacity>

      <Title>Cadastre-se</Title>
      <Subtitle>Informe seu e-mail e crie uma senha</Subtitle>

      <Form>
        <Input
          name="email"
          control={control}
          label="Crie um e-mail"
          placeholder="Digite seu e-mail"
          textContentType="emailAddress"
          keyboardType="email-address"
          error={errors.email?.message}
        />

        <Input
          name="confirmEmail"
          control={control}
          label="Repita seu e-mail"
          placeholder="Confirme seu e-mail"
          textContentType="emailAddress"
          keyboardType="email-address"
          error={errors.confirmEmail?.message}
        />

        <Input
          name="password"
          control={control}
          label="Crie sua senha"
          placeholder="Digite sua senha"
          secureTextEntry
          textContentType="newPassword"
          error={errors.password?.message}
        />

        <Input
          name="confirmPassword"
          control={control}
          label="Repita sua senha"
          placeholder="Confirme sua senha"
          secureTextEntry
          textContentType="password"
          error={errors.confirmPassword?.message}
        />
      </Form>

      <Button
        label="Cadastrar"
        style={{ marginTop: 32 }}
        onPress={hookFormHandleSubmit(handleSubmit)}
        loading={isLoading}
      />

      <View style={{ paddingBottom: 55 }}>
        <OtherOptionsSingin />
      </View>
    </Container>
  );
}
