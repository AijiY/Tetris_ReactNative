import React from 'react';
import { View, Text, Button, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    gameContainer: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'lightgrey',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 0,
      padding: width * 0.1, // 5% of screen width
      width: width,
      height: height
    },
    homeContainer: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'lightgrey',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 0,
      padding: width * 0.1, // 5% of screen width
      width: width,
      height: height
    },
    title: {
      textAlign: 'center',
      fontSize: width * 0.2, // 20% of screen width
      margin: 0,
      padding: 0,
      color: 'black',
    },
    gameContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderWidth: width * 0.03, // 3% of screen width
      borderColor: 'grey',
      borderRadius: width * 0.02, // 2% of screen width
      backgroundColor: 'lightgrey',
      padding: width * 0.04, // 4% of screen width
      width: width,
      height: height,
      boxSizing: 'border-box',
    },
    gameDisplay: {
      backgroundColor: 'white',
      width: width * 0.85, // 50% of screen width
      height: height * 0.5, // 30% of screen height
    },
    nextBlockDisplay: {
      backgroundColor: 'white',
      width: width * 0.3, // 20% of screen width
      height: width * 0.3, // 20% of screen width (for square display)
    },
    nextBlockContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: width * 0.02, // 2% of screen width
    },
    buttonContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
      width: width * 0.5,
    },
    difficultyButton: {
      width: '100%',
      padding: 15,
      marginVertical: 10,
      backgroundColor: '#f0f0f0', // Background color of the button
      alignItems: 'center',
      borderRadius: 10,
    },
    difficultyButtonText: {
      fontSize: width * 0.1,
    },
    exitButtonContainer: {
      marginBottom: height * 0.02, // 2% of screen height
      gap: width * 0.02, // 2% of screen width
      width: width * 0.3, // 30% of screen width
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    gameInformationContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    mainContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: width * 0.1, // 10% of screen width
      backgroundColor: 'lightgrey',
      width: width,
      height: height,
    },
    gameInfoAndNextBlock: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: height * 0.01, // 1% of screen height
      marginBottom: height * 0.02, // 2% of screen height
      marginLeft: width * 0.02, // 2% of screen width
      alignItems: 'center',
      justifyContent: 'space-around',
      width: width
    },
    gameButtonContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: width * 0.02, // 2% of screen width
      marginTop: width * 0.05, // 5% of screen width
      width: width * 0.5, // 50% of
    },
    gameButton: {
      verticalAlign: 'middle',
      paddingLeft: width * 0.05, // 5% of screen width
      paddingRight: width * 0.05, // 5% of screen width
    },
    startResetButton: {
      padding: width * 0.02, // 2% of screen width
      margin: width * 0.04, // 4% of screen width
    },
    gameButton: {
      width: '100%',
      padding: 0,
      marginVertical: 0,
      backgroundColor: '#f0f0f0', // Background color of the button
      alignItems: 'center',
      borderRadius: 5,
    },
    buttonText: {
      fontSize: width * 0.07,
      color: 'black',
    },
    time: {
      fontSize: width * 0.08, // 6% of screen width
      color: 'black',
      textAlign: 'left',
      width: '100%',
    },
    score: {
      fontSize: width * 0.08, // 6% of screen width
      color: 'black',
      textAlign: 'left',
      width: '100%',
    },
    gameOver: {
      color: 'red',
      position: 'absolute',
      borderWidth: width * 0.01, // 10% of screen width
      borderColor: 'black',
      backgroundColor: 'white',
      padding: width * 0.05, // 5% of screen width
      zIndex: 2,
      fontSize: width * 0.1, // 10% of screen width
      top: '50%',
      left: '50%',
      transform: [{ translateX: -width * 0.25 }, { translateY: -height * 0.05 }], // Centering
    },
    youWin: {
      color: 'blue',
      position: 'absolute',
      borderWidth: width * 0.01, // 10% of screen width
      borderColor: 'black',
      backgroundColor: 'white',
      padding: width * 0.05, // 5% of screen width
      zIndex: 2,
      fontSize: width * 0.1, // 10% of screen width
      top: '50%',
      left: '50%',
      transform: [{ translateX: -width * 0.2 }, { translateY: -height * 0.05 }], // Centering
    },
    rotateMoveButtonContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: width * 0.02, // 2% of screen width
      width: '100%',
    },
    rotateMoveButton: {
      flex: 1,
      padding: 0,
      marginVertical: 0,
      backgroundColor: '#f0f0f0', // Background color of the button
      alignItems: 'center',
      borderRadius: 5,
    },
    rotateRightButton: {
      paddingBottom: height * 0.015, // 1.5% of screen height
      fontSize: width * 0.07, // 7% of screen width
    },
    rotateLeftButton: {
      paddingBottom: height * 0.015, // 1.5% of screen height
      fontSize: width * 0.07, // 7% of screen width
    },
    moveDownButton: {
      width: width * 0.5, // 50% of screen width
      padding: height * 0.015, // 1.5% of screen height
    },
    nextBlockLabel: {
      fontSize: width * 0.07, // 6% of screen width
      color: 'black',
    },
    block: {
      boxSizing: 'border-box',
      borderWidth: height * 0.001, // 0.1% of screen height
      borderColor: 'white',
      position: 'absolute',
    },
  });
  
  export default styles;