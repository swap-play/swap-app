import { ReactNode } from 'react';
import { ActivityIndicator, TouchableOpacityProps, View } from 'react-native';
import * as S from './styles';
import { Text } from '../Text';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  imageSvg?: ReactNode;
  transparent?: boolean;
  outlined?: boolean;
  loading?: boolean;
}

export function Button({
  label,
  imageSvg,
  outlined,
  style,
  transparent,
  loading,
  ...rest
}: ButtonProps) {
  const outlinedStyles = { borderColor: '#D7D7D7', borderWidth: 1 };

  return (
    <S.Container
      style={[
        {
          flexDirection: imageSvg ? 'row' : 'column',
          position: 'relative',
          backgroundColor: outlined ? '#fff' : '#8b5fd9',
        },
        outlined && outlinedStyles,
        style,
      ]}
      {...rest}
    >
      {imageSvg && transparent && (
        <S.ImageContainerTransparent>{imageSvg}</S.ImageContainerTransparent>
      )}

      {imageSvg && !transparent && (
        <S.ImageContainer>{imageSvg}</S.ImageContainer>
      )}
      {loading ? (
        <ActivityIndicator size="large" color={outlined ? '#8b5fd9' : '#fff'} />
      ) : (
        <Text weight="600SemiBold" color={outlined ? '#2E3E4B' : '#fff'}>
          {label}
        </Text>
      )}
    </S.Container>
  );
}
