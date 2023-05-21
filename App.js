import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, useAppState } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [count, setCount] = useAppState(0)
  const increment = setCount(prev => prev + 1)

  return (
    <View style={styles.container}>
      <Text>Testt</Text>
      <Text>{count}</Text>
      <Button onPress={increment} title="Increment" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
