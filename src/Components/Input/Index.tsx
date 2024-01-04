import { TextInputProps } from 'react-native';
import * as S from './styles';
import { Text } from '../Text';

interface InputProps extends TextInputProps {
  label: string;
}

export function Input({ label, ...rest }: InputProps) {
  return (
    <S.Container>
      <Text size={14}>{label}</Text>

      <S.InputText {...rest} placeholderTextColor="#bebebe" />
    </S.Container>
  );
}
