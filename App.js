import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import HeaderCustom from './components/HeaderCustom'
import SwipeCard from './components/SwipeCard'

export default function App() {
  return (
    <View style={styles.container}>
    <HeaderCustom></HeaderCustom>
    <SwipeCard></SwipeCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
   
  },
});
