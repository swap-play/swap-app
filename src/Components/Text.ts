import styled from 'styled-components/native';

interface TextProps {
  weight?:
    | '400Regular'
    | '500Medium'
    | '600SemiBold'
    | '700Bold'
    | '800ExtraBold';
  color?: string;
  size?: number;
  opacity?: number;
}

export const Text = styled.Text<TextProps>`
  font-family: ${({ weight }) =>
    weight ? `OpenSans_${weight}` : 'OpenSans_400Regular'};
  color: ${({ color }) => color || '#333'};
  font-size: ${({ size }) => (size ? `${size}px` : '16px')};
  opacity: ${({ opacity }) => opacity || 1};
`;
