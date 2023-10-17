import { StyleSheet } from 'react-native';

export const SignInStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B5FD9',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
    marginBottom: 18,
  },
  content: {
    backgroundColor: '#FFF',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    color: '#8B5FD9',
    fontSize: 28,
    fontFamily: 'OpenSans_700Bold',
    marginTop: 20,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 16,
    marginTop: 28,
    fontFamily: 'OpenSans_400Regular',
    marginStart: 10,
    marginEnd: 10,
    textAlign: 'center',
    color: '#2E3E4B',
  },

  text: {
    fontSize: 14,
    fontFamily: 'OpenSans_400Regular',
    textAlign: 'center',
    color: '#2E3E4B',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#8B5FD9',
    width: 71,
    height: 71,
    borderRadius: 100,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
