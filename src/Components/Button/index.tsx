import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  DimensionValue,
  ImageSourcePropType,
  TouchableHighlightProps,
} from 'react-native';

interface ButtonProps extends TouchableHighlightProps {
  outlined?: boolean;
  source?: ImageSourcePropType;
  text: string;
  width?: DimensionValue;
  backgroundColor?: string;
}

export function Button({
  outlined = false,
  source,
  text,
  width,
  backgroundColor,
  ...rest
}: ButtonProps) {
  return !outlined ? (
    <TouchableHighlight style={[Styles.buttonIcon, { width }]} {...rest}>
      <View style={[Styles.button, { backgroundColor }]}>
        {source && (
          <View style={Styles.icon}>
            <Image source={source!} />
          </View>
        )}
        <Text style={Styles.buttonText}>{text}</Text>
      </View>
    </TouchableHighlight>
  ) : (
    <TouchableHighlight style={[Styles.buttonOutlined, { width }]} {...rest}>
      <Text style={Styles.buttonOutlinedText}>{text}</Text>
    </TouchableHighlight>
  );
}
const Styles = StyleSheet.create({
  buttonIcon: {
    width: '95%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 60,
    paddingLeft: 10,
    textAlign: 'center',
    borderRadius: 8,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'OpenSans_600SemiBold',
    textAlign: 'center',
    width: '100%',
    flexBasis: 300,
  },
  icon: {
    backgroundColor: '#E0E2E4',
    padding: 4,
    borderRadius: 8,
  },
  buttonOutlined: {
    borderWidth: 1,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderColor: '#D7D7D7',
  },
  buttonOutlinedText: {
    color: '#2E3E4B',
    fontSize: 16,
    fontFamily: 'OpenSans_600SemiBold',
    textAlign: 'center',
  },
});
