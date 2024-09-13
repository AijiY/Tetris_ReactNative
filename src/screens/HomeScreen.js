import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles/styles';

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToGame = (difficulty) => {
    console.log(`Difficulty selected: ${difficulty}`);
    navigation.navigate('Game', { difficulty });
  };

  return (
    <View style={styles.homeContainer}>
    <Text style={styles.title}>Tetris</Text>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.difficultyButton} onPress={() => goToGame('Easy')}>
        <Text style={[styles.difficultyButtonText, { color: 'blue' }]}>Easy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.difficultyButton} onPress={() => goToGame('Normal')}>
        <Text style={[styles.difficultyButtonText, { color: 'green' }]}>Normal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.difficultyButton} onPress={() => goToGame('Hard')}>
        <Text style={[styles.difficultyButtonText, { color: 'red' }]}>Hard</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
};

export default HomeScreen;