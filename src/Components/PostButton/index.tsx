import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from 'react-native';
import LogoSwapPlay from '../../utils/icons/buttonLogo.svg';

export function PostButton({ onPress }: TouchableWithoutFeedbackProps) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <LogoSwapPlay />
    </TouchableWithoutFeedback>
  );
}
