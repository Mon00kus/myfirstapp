import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

interface PositionScreenProps {}

export const PositionScreen = ({}: PositionScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.greenBox}/>
      <View style={styles.purpleBox}/>
      <View style={styles.orangeBox}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //height: 150,
    //width: 300,
    backgroundColor: '#28C4D9',
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    //left: 0,
    bottom: 0,
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: '#F0AB23',
    borderWidth: 10,
    borderColor: 'white',
    paddingTop: 5,
    //top: 0,
    right: 0,
    position: 'absolute',
  },
  greenBox: {
    //flex: 1,
    //width: 100,
    //height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    /* position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top:0, */
    ...StyleSheet.absoluteFillObject, //Absolutamente igual a las 4 anteriores
  },
});
