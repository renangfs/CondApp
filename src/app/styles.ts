import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#999999',
    textAlign: 'center',
    marginTop: 10,
  },
  buttonContainer: {
    width: '100%',
  },
  adminButton: {
    backgroundColor: '#1D5C47',
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  userButton: {
    backgroundColor: '#96C88C',
    paddingVertical: 16,
    borderRadius: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
