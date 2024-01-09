import { TextInputProps } from 'react-native';
import * as S from './styles';
import { Text } from '../Text';
import { Controller, UseControllerProps, FieldValues } from 'react-hook-form';

interface InputProps extends TextInputProps {
  name: string;
  label: string;
  error?: string;
}

export function Input<FormType extends FieldValues>({
  label,
  name,
  control,
  error,
  ...rest
}: UseControllerProps<FormType> & InputProps) {
  const errorStyle = { borderColor: '#FC5050', borderWidth: 2 };
  return (
    <S.Container>
      <Text size={14} color="#2E3E4B">
        {label}
      </Text>

      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <S.InputText
            style={[error ? errorStyle : {}]}
            {...rest}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            placeholderTextColor="#bebebe"
          />
        )}
      />

      {error && (
        <Text size={12} color="#FC5050" weight="600SemiBold">
          {error}
        </Text>
      )}
    </S.Container>
  );
}
