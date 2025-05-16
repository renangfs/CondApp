import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '@/app/criar/styles';

const CreateProductScreen = () => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titleEstoque}>Estoque</Text>
      <Text style={styles.title}>Criar novo produto</Text>

      <Text style={styles.label}>Nome do produto</Text>
      <TextInput
        style={styles.input}
        value={productName}
        onChangeText={setProductName}
        placeholder=""
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Quantidade</Text>
      <TextInput
        style={styles.input}
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
        placeholder=""
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Valor</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        keyboardType="decimal-pad"
        placeholder="R$"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Adicionar imagem</Text>
      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadText}>Upload</Text>
        <FontAwesome name="arrow-up" size={16} color="#134E3A" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Cadastrar novo produto</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateProductScreen;
