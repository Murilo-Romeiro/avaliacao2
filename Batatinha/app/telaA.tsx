import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.titulo}>Batatinha</Text>
        <Text style={styles.paragrafo}>
          "Eu também já fui brotinho
          E vivi de ilusão
          Cresci, fiquei sabida
          Não dou mais o coração"
        </Text>
        <Link style={styles.link} href="/telaB">Ir para o cadastro</Link>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  paragrafo: {
    fontFamily: 'Arial',
    width: 200,
    fontSize: 15,
    textAlign: 'justify',
    marginTop: 20
  },
  logo: {
    resizeMode: 'contain',
    width: 100,
    height: 85,
    marginTop: 85
  },
  titulo: {
    fontSize: 40,
    textAlign: 'justify',
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 20

  }
});
