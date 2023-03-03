import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default function App() {

  const [textoEntrada, SetTextoEntrada] = useState('')

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.titulo}>AsyncStorage</Text>
      <TextInput
        style={styles.entrada}
        value={textoEntrada}
        onChangeText={SetTextoEntrada}
        autoCapitalize='words'
        autoCorrect={false}
        placeholder='Coloque o texto aqui'
        placeholderTextColor='#888'
        textAlign='center'
        color='#ddd'
      />
      <Text>Open up App.js to start working on your app!</Text>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  entrada:{
    width: '70%',
    height: '7%',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    padding: 10,
    fontSize: 15,
  },
  titulo:{
    marginBottom: '15%',
    fontSize: 30,
    fontWeight: 'bold',
    //color: '#ddd',
  }
});
