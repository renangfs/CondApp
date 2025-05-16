import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from '@/app/estoque/styles';
import { MaterialIcons, Feather } from '@expo/vector-icons';

interface Product {
  id: string;
  name: string;
  quantity: number;
  value: number;
}

const data: Product[] = [
  {
    id: '1',
    name: 'Fanta laranja 350ml',
    quantity: 100,
    value: 0,
  },
];

const InventoryScreen: React.FC = () => {
  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.rowData}>
      <Text style={styles.rowText}>{item.name}</Text>
      <Text style={styles.rowText}>{item.quantity} unidades</Text>
      <Text style={styles.rowText}>R$ {item.value.toFixed(2).replace('.', ',')}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estoque</Text>

      <View style={styles.rowButtons}>
        <TouchableOpacity style={styles.deleteButton}>
          <MaterialIcons name="close" size={18} color="red" />
          <Text style={styles.deleteButtonText}> Excluir produto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.createButton}>
          <Feather name="plus" size={18} color="green" />
          <Text style={styles.createButtonText}> Criar produto</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.editButton} disabled>
        <Feather name="edit-2" size={16} color="#555" />
        <Text style={styles.editButtonText}>Editar produto</Text>
      </TouchableOpacity>

      <View style={styles.tableHeader}>
        <Text style={styles.headerCell}>Nome</Text>
        <Text style={styles.headerCell}>Quantidade</Text>
        <Text style={styles.headerCell}>Valor</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View> 
  );
};

export default InventoryScreen;
