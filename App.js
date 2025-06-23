import React, { useState } from 'react';
import { View, Text, FlatList, Modal, StyleSheet, TouchableOpacity, Button } from 'react-native';
import RecipeCard from './components/UserCard';

const receitas = [
  {
    id: '1',
    titulo: 'Bolo de Cenoura',
    descricao: 'Bolo fofinho com cobertura de chocolate',
    ingredientes: '3 cenouras, 4 ovos, 2 xícaras de açúcar, 2 de farinha, 1 de óleo...',
    preparo: 'Bata tudo no liquidificador, asse por 40min a 180°C...'
  },
  {
    id: '2',
    titulo: 'Macarrão à Bolonhesa',
    descricao: 'Macarrão com molho de carne moída',
    ingredientes: 'Macarrão, carne moída, molho de tomate, cebola, alho...',
    preparo: 'Cozinhe o macarrão, faça o molho refogando tudo...'
  }
];

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [receitaSelecionada, setReceitaSelecionada] = useState(null);

  const abrirModal = (receita) => {
    setReceitaSelecionada(receita);
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
    setReceitaSelecionada(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minhas Receitas</Text>
      <FlatList
        data={receitas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RecipeCard receita={item} aoPressionar={() => abrirModal(item)} />
        )}
      />

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            {receitaSelecionada && (
              <>
                <Text style={styles.modalTitulo}>{receitaSelecionada.titulo}</Text>
                <Text style={styles.modalSubtitulo}>Ingredientes:</Text>
                <Text>{receitaSelecionada.ingredientes}</Text>
                <Text style={styles.modalSubtitulo}>Modo de Preparo:</Text>
                <Text>{receitaSelecionada.preparo}</Text>
                <Button title="Fechar" onPress={fecharModal} />
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  modal: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgb(0, 0, 0)'
  },
  modalContent: {
    backgroundColor: 'gray',
    margin: 20,
    padding: 20,
    borderRadius: 10
  },
  modalTitulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  modalSubtitulo: { marginTop: 10, fontWeight: 'bold' }
});
