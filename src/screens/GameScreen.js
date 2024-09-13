import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles/styles';

const GameScreen = () => {

  const navigation = useNavigation();

  const gotoHome = () => {
      console.log('Going to Home Screen');
      navigation.navigate('Home');
  }

  return (
    <View style={styles.gameContainer}>
      <Text style={styles.gameOver}>GameOver</Text>
      <Text style={styles.youWin}>You Win!</Text>

      <View style={styles.gameInfoAndNextBlock}>
        <View style={styles.gameInformationContainer}>
          <View style={styles.exitButtonContainer}>
            <TouchableOpacity style={styles.gameButton} onPress={() => gotoHome()}>
              <Text style={styles.buttonText}>Exit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gameButton} onPress={() => startOrReset()}>
              <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.time}>Time: 00:00</Text>
          <Text style={styles.score}>Score: 0</Text>
        </View>
        <View style={styles.nextBlockContainer}>
          <Text style={styles.nextBlockLabel}>Next Block</Text>
          <View style={styles.nextBlockDisplay} />
        </View>
      </View>

      <View style={styles.gameDisplay} />

      <View style={styles.gameButtonContainer}>
        <View style={styles.rotateMoveButtonContainer}>
          <TouchableOpacity style={styles.rotateMoveButton} onPress={() => { /* Rotate Left button handler */ }}>
            <Text style={styles.buttonText}>↶</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rotateMoveButton} onPress={() => { /* Move Left button handler */ }}>
            <Text style={styles.buttonText}>←</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rotateMoveButton} onPress={() => { /* Move Right button handler */ }}>
            <Text style={styles.buttonText}>→</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rotateMoveButton} onPress={() => { /* Rotate Right button handler */ }}>
            <Text style={styles.buttonText}>↷</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.gameButton} onPress={() => { /* Move Down button handler */ }}>
            <Text style={styles.buttonText}>↓</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default GameScreen;
