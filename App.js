import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, useAppState } from 'react-native';
import React, { useState } from 'react';

import QuestionScreen from './app/screens/QuestionScreen';

export default function App() {

  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(prev => prev + 1)
  }

  return (
    <View style={styles.container}>
      <QuestionScreen />
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
