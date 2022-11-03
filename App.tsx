import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const message: Array<string> = [];

  message.push('Hello ');
  console.log(message);
  message.push('World. '); 
  console.log(message);
  message.push('I am the Bug :->');
  console.log(message);

  return (
    <View style={styles.container}>
      <Text>{message.join('')}</Text>
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
});
