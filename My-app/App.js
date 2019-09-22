import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './components/Weather';

export default function App() {
  return (
    <Weather zipCode="90110"/>
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