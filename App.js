import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput} from 'react-native';
import React, {useState} from 'react';
import Sport from "./src/models/Sport"

export default function App() {

  let football = new Sport("football");
  football.setCalories(20.5783215)
  
 
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text> I want to play {football.getName()} burning {football.getCalories()} calories</Text>
      <Text>hi there</Text>

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
