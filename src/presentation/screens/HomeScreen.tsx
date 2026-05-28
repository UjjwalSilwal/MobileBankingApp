import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useAuth } from '../../hooks/useAuth';

export default function HomeScreen({ navigation }: any) {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Home</Text>

      <Text style={styles.subtitle}>
        Welcome {user?.name || 'User'}
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>Balance: $5,000</Text>
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Send Money</Text>
      </Pressable>

      <Pressable
        style={[styles.button, { backgroundColor: 'red' }]}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginVertical: 10,
  },
  card: {
    padding: 20,
    backgroundColor: '#f3f4f6',
    borderRadius: 10,
    marginVertical: 20,
  },
  cardText: {
    fontSize: 18,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 14,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});