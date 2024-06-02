import { Text, SafeAreaView, StyleSheet } from 'react-native';
//sera q n da pra soh editar?
import { Card } from 'react-native-paper';
//teste
import TelaLogin from "./src/Pages/TelaLogin"


export default function App() {
  return (
    <SafeAreaView >      
      <TelaLogin/>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
