import { TouchableOpacity } from 'react-native';
import { Text } from '../Text';

interface SelectionButton {
  label: string;
}

export function SelectionButton({ label }: SelectionButton) {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 40,
        borderColor: '#D7D7D7',
        paddingHorizontal: 20,
        paddingVertical: 12,
        minWidth: 90,
      }}
    >
      <Text color="#2E3E4B" size={16} weight="600SemiBold">
        {label}
      </Text>
    </TouchableOpacity>
  );
}
