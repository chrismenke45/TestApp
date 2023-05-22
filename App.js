import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, useAppState } from 'react-native';
import React, { useState } from 'react';
import { NativeRouter, Routes, Route } from "react-router-native";

import QuestionScreen from './app/screens/QuestionScreen';
import CorrectScreen from './app/screens/CorrectScreen';
import IncorrectScreen from './app/screens/IncorrectScreen';

export default function App() {

  return (
    <NativeRouter>
      <Routes>
        <Route
          path='/'
          element={
            <QuestionScreen />
          }
        />
        <Route
          path='/correct'
          element={
            <CorrectScreen />
          }
        />
        <Route
          path='/incorrect'
          element={
            <IncorrectScreen />
          }
        />
      </Routes>
    </NativeRouter>
  );
}
