import React from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F2F2" />

      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.subtitle}>
          Seu mercadinho, sua{'\n'}comodidade, seu app.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.adminButton}>
          <Text style={styles.buttonText}>Entrar como administrador</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.userButton}>
          <Text style={styles.buttonText}>Entrar como morador</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
