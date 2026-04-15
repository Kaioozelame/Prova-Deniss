import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function App() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);

  const somar = () => {
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);

    if (isNaN(n1) || isNaN(n2)) {
      setResultado('Digite apenas números válidos!');
    } else {
      setResultado(n1 + n2);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
        value={numero1}
        onChangeText={setNumero1}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o segundo número"
        keyboardType="numeric"
        value={numero2}
        onChangeText={setNumero2}
      />
      <Button title="Somar" onPress={somar} />
      {resultado !== null && (
        <Text style={styles.resultado}>Resultado: {resultado}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});