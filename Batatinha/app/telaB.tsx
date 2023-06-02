import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.titulo}>Batatinha</Text>
      <TextInput placeholder="Nome" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Data de Nascimento" style={styles.input} />
      <TextInput placeholder="CPF" style={styles.input} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <Link style={styles.link} href="/">Voltar</Link>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    resizeMode: 'contain',
    width: 100,
    height: 85,
    marginTop: 70,
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    height: 45,
    width: '75%',
    color: '#A3A1A5',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingLeft: 20,
    marginTop: 20,
  },
  button: {
    height: 45,
    width: '75%',
    backgroundColor: '#6879C1',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  link: {
    color: '#fff',
    fontSize: 16,
  }
});
