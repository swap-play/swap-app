import { useFonts, OpenSans_600SemiBold } from "@expo-google-fonts/open-sans";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";

export default function Login() {
  const [loadedFont] = useFonts({
    OpenSans_600SemiBold,
  });
  if (!loadedFont) {
    return null;
  }
  return (
    <View style={Styles.container}>
      <Image
        source={require("../../utils/picture-woman-and-dog.png")}
        style={Styles.image}
      />
      <Text style={Styles.title}>Ótimo dia!</Text>
      <Text style={Styles.subtitle}>Como deseja acessar?</Text>
      <TouchableHighlight style={Styles.buttonIcon}>
        <View style={Styles.button}>
          <View style={Styles.icon}>
            <Image source={require("../../utils/google-icon.png")} />
          </View>
          <Text style={Styles.buttonText}>Entrar com Google</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={Styles.buttonOutlined}>
        <Text style={Styles.buttonOutlinedText}>Outras formas</Text>
      </TouchableHighlight>
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    marginTop: "20%",
    marginRight: "-6%",
  },
  title: {
    fontSize: 30,
    color: "#2E3E4B",
    fontFamily: "OpenSans-Bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#2E3E4B",
    fontFamily: "OpenSans-Medium",
    marginBottom: "10%",
  },
  buttonIcon: {
    width: "95%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 60,
    backgroundColor: "#8B5FD9",
    paddingLeft: 10,
    textAlign: "center",
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "OpenSans_600SemiBold",
    textAlign: "center",
    width: "100%",
    flexBasis: 300,
  },
  icon: {
    backgroundColor: "#E0E2E4",
    padding: 4,
    borderRadius: 8,
  },
  buttonOutlined: {
    width: "95%",
    borderWidth: 1,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderColor: "#D7D7D7",
  },
  buttonOutlinedText: {
    color: "#2E3E4B",
    fontSize: 18,
    fontFamily: "OpenSans-SemiBold",
    textAlign: "center",
  },
});
