import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    DimensionValue,
    ImageSourcePropType
} from 'react-native';

type ButtonProps = {
    outlined: boolean;
    source: ImageSourcePropType;
    text: string;
    width: DimensionValue;
    backgroundColor: string;
};
export function Buttons({
    outlined = false,
    source,
    text,
    width,
    backgroundColor
}: ButtonProps) {
    return !outlined ? (
        <TouchableHighlight
            style={[Styles.buttonIcon, { width, backgroundColor }]}
        >
            <View style={Styles.button}>
                <View style={Styles.icon}>
                    <Image source={source} />
                </View>
                <Text style={Styles.buttonText}>{text}</Text>
            </View>
        </TouchableHighlight>
    ) : (
        <TouchableHighlight style={[Styles.buttonOutlined, { width }]}>
            <Text style={Styles.buttonOutlinedText}>{text}</Text>
        </TouchableHighlight>
    );
}
const Styles = StyleSheet.create({
    buttonIcon: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        height: 60
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingLeft: 10,
        textAlign: 'center',
        borderRadius: 8,
        marginBottom: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'OpenSans-SemiBold',
        textAlign: 'center',
        width: '100%',
        flexBasis: 300
    },
    icon: {
        backgroundColor: '#E0E2E4',
        padding: 4,
        borderRadius: 8
    },
    buttonOutlined: {
        borderWidth: 1,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        borderColor: '#D7D7D7'
    },
    buttonOutlinedText: {
        color: '#2E3E4B',
        fontSize: 18,
        fontFamily: 'OpenSans-SemiBold',
        textAlign: 'center'
    }
});
