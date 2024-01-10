import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import BackArrow from '../../utils/images/backArrow.svg';

interface BackArrowButtonProps extends TouchableOpacityProps {}

export function BackArrowButton(props: BackArrowButtonProps) {
  return (
    <TouchableOpacity {...props}>
      <BackArrow width={12} height={24} style={{ marginTop: 8 }} />
    </TouchableOpacity>
  );
}
