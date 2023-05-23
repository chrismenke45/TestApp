import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, useAppState } from 'react-native';
import React, { useState } from 'react';
import { NativeRouter, Routes, Route } from "react-router-native";

import QuestionScreen from './app/screens/QuestionScreen';
import AnswerScreen from './app/screens/AnswerScreen';

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
            <AnswerScreen correct={true}/>
          }
        />
        <Route
          path='/incorrect'
          element={
            <AnswerScreen correct={false} />
          }
        />
      </Routes>
    </NativeRouter>
  );
}
