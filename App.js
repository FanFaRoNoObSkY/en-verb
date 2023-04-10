import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import {Button} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter: {counter}</Text>
      <Button title="Click me!" color="green" onPress={()=>setCounter(counter+1)}></Button>
      <Button title="Restart" color="red" onPress={()=>setCounter(0)}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212132',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 28,
    fontWeight: "bold",
    color: "#f1f1f1"
  },
});
