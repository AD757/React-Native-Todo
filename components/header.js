import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Todo - React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: '#22a7f0',
  },
  title: {
    textAlign: 'center',
    color: '#f5f5f5',
    fontSize: 22,
    fontWeight: 'bold',
  }
});