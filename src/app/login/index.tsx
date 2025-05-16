import React from 'react';
import { View, Text, TextInput, TouchableOpacity,Image } from 'react-native';
import styles from '@/app/login/styles';

export default function LoginScreen() {
  return (

    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('@/app/images/logo.png')}
          style={styles.logo}
          resizeMode="contain" 
        />
      </View>
      <Text style={styles.subtitle}>Acesse sua conta</Text>

      <Text style={styles.label}>Nome do administrador</Text>
      <TextInput style={styles.input} placeholder="Digite seu nome" placeholderTextColor="#999" />

      <Text style={styles.label}>Senha do administrador</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        placeholderTextColor="#999"
      />

      <TouchableOpacity>
        <Text style={styles.forgot}>Esqueci minha senha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.register}>Cadastrar administrador</Text>
      </TouchableOpacity>
    </View>
  );
}
