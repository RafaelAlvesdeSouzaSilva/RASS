import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function UserCard({ receita, aoPressionar }) {
  return (
    <TouchableOpacity style={styles.card} onPress={aoPressionar}>
      <Text style={styles.ttl}>{receita.titulo}</Text>
      <Text>{receita.descricao}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'gray',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
