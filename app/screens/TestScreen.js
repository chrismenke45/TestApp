import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, useAppState } from 'react-native';
import React, { useState } from 'react';

export default function TestScreen() {

  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(prev => prev + 1)
  }

  return (
    <View style={styles.container}>
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
